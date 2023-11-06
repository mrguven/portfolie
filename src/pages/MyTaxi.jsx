
import { useState,useEffect, useRef } from 'react';
import { Loader } from "@googlemaps/js-api-loader";
//import UseScript from '../components/UseScript';
import axios, { Axios } from 'axios';

// import GMap from '../pages/Gmap'

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
const [loadMap, setLoadMap] = useState();
const [total,setTotal]=useState(Number);
const result=useRef();
const googleMapRef = useRef(null);
const [map, setMap] = useState(null);
const [departureOptions,setDepartureOptions]=useState();
const [arrivingOptions,setArrivingOptions]=useState()

setDefaults({
  key:  GOOGLE_MAP_API_KEY 
  
});






// useEffect(() => {
//    const googleMap = initGoogleMap();
//    setMap(googleMap);
// }, []);

let newmap;


const getMap=async () => {



  const loader = new Loader({
    apiKey: GOOGLE_MAP_API_KEY,
    version: "weekly",
    libraries: ['geometry']
  });
  
  loader.load().then(async () => {
    const { Map } = await  window.google.maps.importLibrary("maps");
  
    newmap= new Map(googleMapRef.current, {
      center: {
        lat: 51.9244,
        lng: 4.4777
      },
      zoom: 10
    });
  });
}


useEffect(()=>{
  

getMap()


 }, []);




console.log(time);
console.log(arriving);
console.log(departure);

// const { isLoaded } = useJsApiLoader({
    
//     googleMapsApiKey:  GOOGLE_MAP_API_KEY,
//   });



const makeReservation = async (event)=>{
        event.preventDefault();

        const loader = new Loader({
          apiKey: GOOGLE_MAP_API_KEY,
          version: "weekly",
          libraries: ['geometry']
        });
        
        loader.load().then(async () => {
          const { Map } = await  window.google.maps.importLibrary("maps");
        newmap= new Map(googleMapRef.current, {
          center: {
            lat: 51.9244,
            lng: 4.4777
          },
          zoom: 10
        });
      });
        
       
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
            directionsRenderer.setMap(newmap);
            console.log(map);
            setSearch(response)
console.log(search);
          }

        }
          )

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


{/* 
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

 
  <h2 id='result' ref={result}>  total : { total} euro </h2>


}
    </div>

    <div id='mapsStyle'
    ref={googleMapRef}
    
   
  /></div>







    )
}