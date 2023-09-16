import {  useEffect, useState,useRef } from "react";
import heart from '../heart-beat.gif'

export default function CatchMe(){

const [item,setItem]=useState();
const [location,setLocation]=useState();
const [start,setStart]=useState(false);
const[con,setCon]=useState(false);
const [pause,setPause]=useState(false)
const[pic,setPic]=useState(heart);
const [score,setScore]=useState(0);
const [best,setBest]=useState(0);

const startButton=useRef();
const displayHeart=useRef();
const scoreWiew=useRef()
const bestScoreView=useRef();
const pauseRef=useRef();



let localBest=0;
let bestFromLocale;
let id;
let id2;
const startGame= ()=>{
    setStart(true);
    
    
}

const startInterval=useRef();
const startInterval2=useRef();

const change =()=> {
    setPause(true);
    setStart(false);

    id=setInterval(() => {
        setStart(false)
     }, 1000);
    
       
    
     id2= setInterval(() => {
            setStart(true)
        }, 2000);
    setScore((score)=>score+=1)

 
}



const pauseGame=()=> {
clearInterval(startInterval.current);
clearInterval(startInterval2.current);

console.log(startInterval2.current);
}

   




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


scoreWiew.current= 'Score: '+ score;


  
if(score>best){
    setBest(score)
}

 if(best>localBest){localBest=best;
    localStorage.setItem('bestScore',JSON.stringify(localBest));
};

bestFromLocale=JSON.parse(localStorage.getItem('bestScore'));
bestScoreView.current= 'best score:' + bestFromLocale;


},[start,localBest]);

startInterval.current=id;
startInterval2.current=id2;






console.log(score);








    return(

<div>
<div>
    <h1 id="title">Catch Me</h1>
    <h1 id="score" ref={scoreWiew} > {scoreWiew.current} <br /></h1>
    <h1> {bestScoreView.current}</h1>
</div> 


<button id="startButton" ref={startButton} onClick={startGame}>Start</button>
{ pause && 
    <button id="pauseButtonStyle"  ref={pauseRef}  onClick={pauseGame}>Pause</button>
}

    <div>
        <div id="border">
                 <img id="heartStyle" src={pic}   ref={displayHeart} onClick={change} /> 
         </div>
    </div>
</div>







    )
}