import ControlPanel from "../components/ControlPanel"
import MyTaxi from "./MyTaxi"



export default function MyPlayList () {


let playListMainContainer= {
    display:'grid',
    gridTemplateColumns: 'auto auto',
    gridTempateRows:'auto auto ',
     
    
     
   
    
}

let mainControlPanel={
    gridArea:'controlPanel'
}

let taxiCss={
    
}


    return (
<div style={playListMainContainer}>
    <div><ControlPanel style={mainControlPanel}></ControlPanel></div>
    <div></div>


</div>
        
    )
}