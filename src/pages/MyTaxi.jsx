
import taxi from '../taxi.jpg'



export default function MyTaxi () {




const makeReservation =(event)=>{
        event.preventDefault();
        



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
                  <input type="text" name="departure" required className="reservationInput" id="departure"  placeholder="departure"/>
                  </div>
        <div>
                  <label htmlFor="arriving"   className="reservationLabel">
                    Arriving: </label>
                           
        </div>
        <div>
        <input type="text" name="arriving" className="reservationInput" required  placeholder="arriving"/>
        </div>
        <div>
            <label htmlFor="date" className="reservationLabel"> Date:
             </label>
            
        </div>
        <div>
        <input type="datetime-local" name="time" className="reservationInput"  required />
        </div>
    <button type="submit"  onClick={makeReservation}  className="submitButtons">Make reservation</button>
</form>




</div>

    )
}