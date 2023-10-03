
import { useState } from 'react';

import axios from 'axios';
import { useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer, useLoadScript } from "@react-google-maps/api";



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

        
        axios.get(`https://maps.googleapis.com/maps/api/directions/json?destination=${arriving}&origin=${departure}&key=${process.env.google_maps_api_key}`)
        .then((response) => setResult(response.data))
        .catch((error) => console.log(error));







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