import {  useEffect, useState,useRef } from "react";
import heart from '../heart-beat.gif'

export default function CatchMe(){

const [item,setItem]=useState();
const [location,setLocation]=useState();
const [start,setStart]=useState(false);
const[con,setCon]=useState();
const[pic,setPic]=useState(heart)
const startButton=useRef();
const displayHeart=useRef();


const startGame= ()=>{
    setStart(true);
    
    
}



const change =()=> {

    setStart(false);

setInterval(() => {
    setStart(false)
 }, 3000);

   

setInterval(() => {
        setStart(true)
    }, 2000);


  

    
}






useEffect(()=> {
    if (start) {startButton.current.style.display= 'none';
    displayHeart.current.style.display= 'block';

};

if(!start) {
    displayHeart.current.style.display= 'none';
}

},[start]);




const heartStyle={
    width:"75px",
    height:'75px',


}


    return(

<div>
<div><h1 id="title">Catch Me</h1></div>

<button id="startButton" ref={startButton} onClick={startGame}>Start</button>

<div id="border">
    <img id="heart" src={pic}  style={heartStyle} ref={displayHeart} onClick={change} /> 
     </div>
</div>







    )
}