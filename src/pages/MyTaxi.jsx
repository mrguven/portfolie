
import taxi from '../taxi.jpg'



export default function MyTaxi () {








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
            <img src={taxi} alt="taxi" id='taxiImgParent' />
        </div>
    </div>



<form action="/makeReservation" method="get" id="reservationInfo">
    
         <div>
                  <label htmlFor="departure" className="reservationLabel"  >
                    Departure:  
                  </label>
                  </div>
                  <div>
                  <input type="text" name="departure" className="reservationInput" id="departure"  placeholder="departure"/>
                  </div>
        <div>
                  <label htmlFor="arriving"   className="reservationLabel">
                    Arriving: </label>
                           
        </div>
        <div>
        <input type="text" name="arriving" className="reservationInput"  placeholder="arriving"/>
        </div>
        <div>
            <label htmlFor="date" className="reservationLabel"> Date:
             </label>
            
        </div>
        <div>
        <input type="datetime-local" name="time" className="reservationInput"  />
        </div>
    <button type="submit" className="submitButtons">Make reservation</button>
</form>




</div>

    )
}