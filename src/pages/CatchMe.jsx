import {  useEffect, useState,useRef } from "react";
import heart from '../heart-beat.gif'

export default function CatchMe(){

const [item,setItem]=useState();
const [location,setLocation]=useState();
const [start,setStart]=useState(false);
const[con,setCon]=useState();
const[pic,setPic]=useState(heart);
const [score,setScore]=useState(0);
const [best,setBest]=useState(0);
const [localBest,setLocalBest]=useState("");
const startButton=useRef();
const displayHeart=useRef();
const scoreWiew=useRef()
const bestScoreView=useRef();

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
setScore((score)=>score+=1)
  
if(score>best){
    setBest(score)
}




}

    if(best>localBest){setLocalBest(best)};
console.log(score);


scoreWiew.current= 'Score: '+ score;

localStorage.setItem('bestScore',JSON.stringify(localBest));
const bestFromLocale=(JSON.parse(localStorage.getItem('bestScore')))


bestScoreView.current= 'best score:' + bestFromLocale;

useEffect(()=> {
    const posX= Math.floor(Math.random()*900);
    const posY= Math.floor(Math.random()*350);
    
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
    <h1 id="score" ref={scoreWiew} > {scoreWiew.current} <br /> {bestScoreView.current}</h1>
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