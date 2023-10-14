
import { useState,useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
// import GMap from '../pages/Gmap'
// import axios from 'axios';
import { useJsApiLoader } from "@react-google-maps/api";
//import { usePlacesWidget,Autocomplete } from "react-google-autocomplete";



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

    

export default function MyTaxi () {
  const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const [departure,setDeparture]=useState('');
const [arriving,setArriving]=useState('');
const[time, setTime]=useState('');
const [distance,setDistance]=useState();
const[travelTime,setTravelTime]=useState();
//const [search, setSearch] = useState(false);
const [directionsResponse, setDirectionsResponse] = useState(null);
const [loadMap, setLoadMap] = useState(false);


setDefaults({
  key:  GOOGLE_MAP_API_KEY 
  
});

const googleMapRef = useRef(null);
const [map, setMap] = useState(null);

useEffect(() => {
  const googleMap = initGoogleMap();
  setMap(googleMap);
}, []);


// useEffect(() => {
//   const options = {
//     apiKey: GOOGLE_MAP_API_KEY,
//     version: "weekly",
//     libraries: ['geometry']
//   };

//   new Loader(options).load().then(() => {
//     setLoadMap(true);
//   }).catch(e => {
//     console.error('Sorry, something went wrong: Please try again later. Error:', e);
//   });
// }, []);



console.log(time);
console.log(arriving);
console.log(departure);

// const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: process.env.google_maps_api_key,
//   });



const makeReservation = async (event)=>{
        event.preventDefault();
       

        if (arriving === "" || departure === "") {
          const initGoogleMap = () => {
            return new window.google.maps.Map(googleMapRef.current, {
              center: new window.google.maps.LatLng(51.9244, 4.4777),
              zoom: 10
            });
          }
    
          initGoogleMap();
          } 
       
         

          if (!map)  return;

          var directionsService = new window.google.maps.DirectionsService();
          var directionsRenderer = new window.google.maps.DirectionsRenderer();
      if(arriving  && departure) {fromAddress( departure)
        .then(({ results }) => {
          const { lat, lng } = results[0].geometry.location;
          console.log(lat, lng);
          var departure = new window.google.maps.LatLng(lat, lng);
       
        
        
        fromAddress(arriving)
        .then(({ results }) => {
          const { lat, lng } = results[0].geometry.location;
          console.log(results);
          var arriving = new window.google.maps.LatLng(lat, lng);
          var request = {
            origin: departure,
            destination: arriving,
            travelMode: 'DRIVING'
          };
          directionsService.route(request, function (response, status) {
            if (status == 'OK') {
              directionsRenderer.setDirections(response);
              console.log(response);
              directionsRenderer.setMap(map);
              console.log(map);
            }
          });
      
      
        })
        .catch(console.error);
      
        
      })
      .catch(console.error);}
      else {
        return
      }

   

        }

        const initGoogleMap = () => {
          return new window.google.maps.Map(googleMapRef.current, {
            center: new window.google.maps.LatLng(51.9244, 4.4777),
            zoom: 10
          });
        }

        

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



<form action="/makeReservation" method="get" id="reservationInfo">
    
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





{/* {
     isLoaded &&
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
} */}

    {/* <div className="App">
     
      { !directionsResponse ? <div>Loading...</div> : <GMap   arrPlace={arriving} deparPlace={departure}   />}
     
     
    </div> */}

    <div id='mapsStyle'
    ref={googleMapRef}
    
   
  />

    <div>
    <h2 id='result'></h2>
</div>


</div>

    )
}