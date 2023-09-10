import {  useEffect, useState,useRef } from "react";
import heart from '../heart-beat.gif'

export default function CatchMe(){

const [item,setItem]=useState();
const [location,setLocation]=useState();
const [start,setStart]=useState(false);
const[con,setCon]=useState();
const[pic,setPic]=useState(heart);
const [score,setScore]=useState(0);
const startButton=useRef();
const displayHeart=useRef();
const scoreWiew=useRef()

const startGame= ()=>{
    setStart(true);
    
    
}



const change =()=> {

    setStart(false);

setInterval(() => {
    setStart(false)
 }, 1000);

   

setInterval(() => {
        setStart(true)
    }, 2000);

  scoreWiew.current= 'Score:'  ;
}



console.log(scoreWiew.current);


useEffect(()=> {
    const posX= Math.floor(Math.random()*1000);
    const posY= Math.floor(Math.random()*400);
    
    console.log(posX);
 
    if (start) {startButton.current.style.display= 'none';
    displayHeart.current.style.display= 'block';
    displayHeart.current.style.position= 'relative';
    displayHeart.current.style.top=posY+'px';
    displayHeart.current.style.left=posX+'px';

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
<div>
    <h1 id="title">Catch Me</h1>
    <h1 id="score" ref={scoreWiew}> </h1>
</div> 


<button id="startButton" ref={startButton} onClick={startGame}>Start</button>
    <div>
        <div id="border">
                 <img id="heart" src={pic}  style={heartStyle} ref={displayHeart} onClick={change} /> 
         </div>
    </div>
</div>







    )
}