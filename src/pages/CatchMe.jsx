import { useState } from "react";


export default function CatchMe(){

const [item,setItem]=useState();
const [location,setLocation]=useState();
const [start,setStart]=useState(false);
const[con,setCon]=useState();


const startGame= ()=>{
    setStart(true)
}






    return(

<div>
<div><h1 id="title">Catch Me</h1></div>

<button id="startButton" onClick={startGame}>Start</button>

<div id="border">
    <p id="heart"></p>
     </div>
</div>







    )
}