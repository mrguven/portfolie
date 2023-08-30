import {  useEffect, useState,useRef } from "react";
import heart from '../heart-beat.gif'

export default function CatchMe(){

const [item,setItem]=useState();
const [location,setLocation]=useState();
const [start,setStart]=useState(false);
const[con,setCon]=useState();
const[pic,setPic]=useState(heart)
const startButton=useRef();

const startGame= ()=>{
    setStart(true);
    
    
}

useEffect(()=> {
    if (start) {startButton.current.style.display= 'none';



};


},[start]);





    return(

<div>
<div><h1 id="title">Catch Me</h1></div>

<button id="startButton" ref={startButton} onClick={startGame}>Start</button>

<div id="border">
    <img id="heart" src={pic} >  </img>
     </div>
</div>







    )
}