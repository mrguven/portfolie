import {  useEffect, useState,useRef } from "react";


export default function CatchMe(){

const [item,setItem]=useState();
const [location,setLocation]=useState();
const [start,setStart]=useState(false);
const[con,setCon]=useState();

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
    <p id="heart"></p>
     </div>
</div>







    )
}