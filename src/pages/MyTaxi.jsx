
import { useState } from 'react';
import taxi from '../taxi.jpg';
import axios from 'axios';
import { Loader } from "@googlemaps/js-api-loader";



export default function MyTaxi () {


const [departure,setDeparture]=useState();
const [arriving,setArriving]=useState();
const[time, setTime]=useState();
const[result,setResult]=useState();

console.log(time);
console.log(arriving);
console.log(departure);


const makeReservation =(event)=>{
        event.preventDefault();

        
        // axios.get(`https://maps.googleapis.com/maps/api/directions/json?destination=${arriving}&origin=${departure}&key=${process.env. google_maps_api_key}`)
        // .then((response) => setResult(response.data))
        // .catch((error) => console.log(error));





        let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();

console.log(result);
}








    return(
<div>


    <div id="header" >
        <div>
        <h1 className='headVertical'>MyTaxi</h1>
        </div>
        <div>
        <h1 id='head'>MyTaxi</h1>
        </div>
        <div>
        <h1 className='headVertical'>MyTaxi</h1>
        </div>
        <div >
            <img src={taxi} alt="taxi" id='taxiImg' />
            
        </div>
        <div >
            <img src={taxi} alt="taxi" id='taxiImg' />
            
        </div>
        <div >
            <img src={taxi} alt="taxi" id='taxiImg' />
            
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
                  className="reservationInput" id="departure"  placeholder="departure"/>
                  </div>
        <div>
                  <label htmlFor="arriving"   className="reservationLabel">
                    Arriving: </label>
                           
        </div>
        <div>
        <input type="text" name="arriving" 
        value={arriving} onChange={(event)=> setArriving(event.target.value)}
         className="reservationInput" required  placeholder="arriving"/>
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



</div>

    )
}