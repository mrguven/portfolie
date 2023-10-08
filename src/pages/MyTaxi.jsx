
import { useState,useEffect  } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import GMap from '../pages/Gmap'
import axios from 'axios';
import { useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer, DirectonsService,Map, InfoWindow, GoogleApiWrapper } from "@react-google-maps/api";

    

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
      
    

    const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    const center = {
        lat: 51.9244,
        lng: 4.4777,
      };

    

export default function MyTaxi () {


const [departure,setDeparture]=useState();
const [arriving,setArriving]=useState();
const[time, setTime]=useState();
const [distance,setDistance]=useState();
const[result,setResult]=useState();

const [loadMap, setLoadMap] = useState(false);

useEffect(() => {
  const options = {
    apiKey: GOOGLE_MAP_API_KEY,
    version: "weekly",
    libraries: ['geometry']
  };

  new Loader(options).load().then(() => {
    setLoadMap(true);
  }).catch(e => {
    console.error('Sorry, something went wrong: Please try again later. Error:', e);
  });
}, []);



console.log(time);
console.log(arriving);
console.log(departure);

const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.google_maps_api_key,
  });

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);

const makeReservation = async (event)=>{
        event.preventDefault();

        if (arriving === "" || departure === "") {
            return;
          }
       
          const directionsService = new window.google.maps.DirectionsService();
          const results = await directionsService.route({
            origin: departure,
            destination: arriving,
            travelMode: window.google.maps.TravelMode.DRIVING,
          });
          setDirectionsResponse(results);
          console.log(directionsResponse);






        }



   











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
                   <input type="text" name="departure" required 
                  value={departure} onChange={(event)=> setDeparture(event.target.value)}
                  className="reservationInput" id="departure"  placeholder="departure" />
                   
                  </div>
        <div>
                  <label htmlFor="arriving"   className="reservationLabel">
                    Arriving: </label>
                           
        </div>
        <div>
       
        <input type="text" name="arriving" 
        value={arriving} onChange={(event)=> setArriving(event.target.value)}
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



<div>
    <h2 id='result'></h2>
</div>

{
     isLoaded &&
     <GoogleMap
        center={center}
        zoom={9}
        mapContainerStyle={{ width: "60%", height: "40vh", margin:'10%' }}
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

<div className="App">
     
      { !arriving && !departure ? <div>Loading...</div> : <GMap  arrPlace={arriving} deparPlace={departure}   />}
     
     
    </div>




</div>

    )
}