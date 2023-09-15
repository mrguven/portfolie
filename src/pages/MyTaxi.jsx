export default function MyTaxi () {


const head= {
    fontFamily:'Courier',
    fontSize:'100px',
    textAlign:'center'
    
}
const headVertical={
    fontFamily:'Courier',
    fontSize:'100px',
    textAlign:'center',
    writingMode: 'vertical-rl',
textOrientation: 'mixed',
}


const departureStyle={
    fontSize:'30px',
    margin:'15px'
}
const arrivingStyle={
    fontSize:'30px',
    margin:'15px'
}

    return(
<div>
    <div >
        <h1 style={head}>MyTaxi</h1>
        <h1 style={headVertical}>MyTaxi</h1>
    </div>



<form action="" method="get">
    <div>
         <div>
                  <label htmlFor="departure" style={departureStyle}  >
                    Departure:   <input type="text" name="departure" id="departure" />
                  </label>
        </div>
        <div>
                  <label htmlFor="arriving" style={arrivingStyle}>
                    Arriving: <input type="text" name="arriving" id="arriving" />
                 </label>
        </div>
        <div>
            <label htmlFor="date"> Date 
             <input type="datetime-local" name="time" id="time" />
            
            </label>
        </div>
    </div>
</form>




</div>

    )
}