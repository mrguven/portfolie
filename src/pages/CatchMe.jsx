import { useState } from "react";


export default function CatchMe(){

const [heart,setHeart]=useState();
const [location,setLocation]=useState();
const [start,setStart]=useState();
const[con,setCon]=useState();







    return(

<div>
<div><h1 id="title">Catch Me</h1></div>

<button id="startButton">Start</button>

<div id="border"> </div>
</div>







    )
}