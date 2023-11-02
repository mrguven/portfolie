
import { useState,useEffect, useRef } from 'react';
import { Loader } from "@googlemaps/js-api-loader"

 import GMap from '../pages/Gmap'
// import axios from 'axios';

import { GoogleMap, Marker, useLoadScript,DirectionsRenderer,useJsApiLoader } from "@react-google-maps/api";
import { usePlacesWidget,Autocomplete } from "react-google-autocomplete";




    // import {
    //     setKey,
    //     setDefaults,
    //     setLanguage,
    //     setRegion,
    //     fromAddress,
    //     fromLatLng,
    //     fromPlaceId,
    //     setLocationType,
    //     geocode,
    //     RequestType,
    //   } from "react-geocode";
      
    import {
      setKey,
      setDefaults,
      setLanguage,
      setRegion,
      fromAddress,
      fromLatLng,
      fromPlaceId,
      setLocationType,
      geocode,
      RequestType,
    } from "react-geocode";

    

    const center = {
        lat: 51.9244,
        lng: 4.4777,
      };

      const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export default function MyTaxi () {
 
const [departure,setDeparture]=useState('');
const [arriving,setArriving]=useState('');
const[time, setTime]=useState('');
const [distance,setDistance]=useState(Number);
const[travelTime,setTravelTime]=useState(Number);
const [search, setSearch] = useState();
const [directionsResponse, setDirectionsResponse] = useState(null);
const [loadMap, setLoadMap] = useState(false);
const [total,setTotal]=useState(Number);
const result=useRef();
const googleMapRef = useRef(null);
const [map, setMap] = useState(null);
const [departureOptions,setDepartureOptions]=useState();
const [arrivingOptions,setArrivingOptions]=useState()

setDefaults({
  key:  GOOGLE_MAP_API_KEY 
  
});






// const initGoogleMap = () => {
//   return new window.google.maps.Map(googleMapRef.current, {
//     center: new window.google.maps.LatLng(51.9244, 4.4777),
//     zoom: 10
//   });
// }


// useEffect(() => {
//    const googleMap = initGoogleMap();
//    setMap(googleMap);
// }, []);


useEffect(() => {



  const loader = new Loader({
    apiKey: GOOGLE_MAP_API_KEY,
    version: "weekly",
    libraries: ['geometry']
  });
  
  loader.load().then(async () => {
    const { Map } = await  window.google.maps.importLibrary("maps");
  
    new Map(googleMapRef.current, {
      center: {
        lat: 51.9244,
        lng: 4.4777
      },
      zoom: 10
    });
  });







  // const options = {
  //   apiKey: GOOGLE_MAP_API_KEY,
  //   version: "weekly",
  //   libraries: ['geometry']
  // };

  // new Loader(options).load().then(() => {
   
  // }).catch(e => {
  //   console.error('Sorry, something went wrong: Please try again later. Error:', e);
  // });
 }, []);



console.log(time);
console.log(arriving);
console.log(departure);

const { isLoaded } = useJsApiLoader({
    
    googleMapsApiKey:  GOOGLE_MAP_API_KEY,
  });



const makeReservation = async (event)=>{
        event.preventDefault();
       
       var directionsService = new window.google.maps.DirectionsService();
        var directionsRenderer = new window.google.maps.DirectionsRenderer();


        var request = {
          origin: departure,
          destination: arriving,
          travelMode: 'DRIVING'
        };
     await   directionsService.route(request, function (response, status) {
          if (status == 'OK') {
            directionsRenderer.setDirections(response);
            console.log(response);
            directionsRenderer.setMap(map);
            console.log(map);
            setSearch(response)
console.log(search);
          }

        }
          )

            

          
       
    fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${departure}&types=geocode&key=${GOOGLE_MAP_API_KEY}`)
.then(response=>response.json())
.catch(e=>console.log(e))
    
    
    
    fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${arriving}&types=geocode&key=${GOOGLE_MAP_API_KEY}`)
    .then(response=>response.json())
    .then()
.catch(e=>console.log(e))






      //   if (arriving === "" || departure === "") {
      
      //     directionsRenderer.setMap(null);
      //   }
      //     if (!map)  return;

      // if(arriving  && departure) 
      // {fromAddress( departure)
      //   .then(({ results }) => {
      //     const { lat, lng } = results[0].geometry.location;
      //     console.log(lat, lng);
      //     var departure = new window.google.maps.LatLng(lat, lng);
       
        
        
      //   fromAddress(arriving)
      //   .then(({ results }) => {
      //     const { lat, lng } = results[0].geometry.location;
      //     console.log(results);
      //     var arriving = new window.google.maps.LatLng(lat, lng);
        
      //     const dir=  directionsService.route(request, function (response, status) {
      //       if (status == 'OK') {
      //         directionsRenderer.setDirections(response);
      //         console.log('response', response);
      //         directionsRenderer.setMap(map);
      //         console.log(map)
              
              
      //         setSearch(response);
      //         console.log(search);
      //       }}
              
             
      //         )
  
      //         setDirectionsResponse(dir);
      //         console.log(dir);
        
      //   })
      //   .catch(console.error);
      
        
      // })
      // .catch(console.error);}
      // else {
      //   return
      // }

      
      
  
    }
      



useEffect(()=>{
console.log(search);
 
    setDistance(search?.routes[0]?.legs[0]?.distance.value/1000)
              
    setTravelTime(search?.routes[0]?.legs[0]?.duration.value/60)
   
    
    
 
  


    setTotal(((distance*3)+(travelTime*0.40)).toFixed(2))

   console.log(total);
   
 console.log(travelTime);
   console.log(distance);


})


// useEffect( ()=>{

//   console.log(total);
//    if(total>0) {
//     result.current=total;
//     console.log(result.current);
//   }
//   else {
//     return
//   }


// })




        
       
     

          // const { ref } = usePlacesWidget({
          //   apiKey: GOOGLE_MAP_API_KEY,
          //   onPlaceSelected: (place) => console.log(place)
            
          // })
     


// console.log(ref);





    return(
<div>


    <div id="header" >
        <div>
        <h1 className='headVertical'>MyTaxi</h1>
        </div>
        <div>
        
        <h1 id='head'>MyTaxi</h1>
        
        <h1 id='head'>MyTaxi</h1>
        </div>
        <div>
        <h1 className='headVertical'>MyTaxi</h1>
        
        </div>
     
    </div>



<form action="/makeReservation" method="post" id="reservationInfo">
    
         <div>
                  <label htmlFor="departure" className="reservationLabel"  >
                    Departure:  
                  </label>
                  </div>
                  <div>
                   <input type="text" name="departure" required  value={departure}
                   onChange={(event)=> setDeparture(event.target.value)}
                  className="reservationInput" id="departure"  placeholder="departure" />
                   
                  </div>
        <div>
                  <label htmlFor="arriving"   className="reservationLabel">
                    Arriving: </label>
                           
        </div>

        <div>
       
        <input type="text" name="arriving"  value={arriving}
         onChange={(event)=> setArriving(event.target.value)}
         className="reservationInput" required  placeholder="arriving" />
          
        </div>
        <div>
            <label htmlFor="date" className="reservationLabel"> Date:
             </label>
            
        </div>
        <div>
        <input type="datetime-local" name="time" className="reservationInput"
         value={time} onChange={(event)=>setTime(event.target.value)}  required />
        </div>
    <button type="submit"  onClick={makeReservation}  className="submitButtons">Make reservation</button>
   
</form>



{ isLoaded &&
    
     <GoogleMap id='mapContainerStyle'
        center={center}
        zoom={9}
       
        options={{
          zoomControl: true,
          streetViewControl: true,
          mapTypeControl: true,
          fullscreenControl: true,
        }}
        onLoad={(map) => setMap(map)}
      >
        <Marker position={center} />
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
} 

     {/* <div className="App">
     
      { !directionsResponse ? <div>Loading...</div> : <GMap   arrPlace={arriving} deparPlace={departure}   />}
     
     
    </div> */}

    <div>
    {
  total>0 && 

 
  <h2 id='result' ref={result}> ~ total cost: { total} euro ~</h2>


}
    </div>

    <div id='mapsStyle'
    ref={googleMapRef}
    
   
  /></div>


 



    )
}