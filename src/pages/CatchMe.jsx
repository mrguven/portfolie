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
const [best,setBest]=useState(Number);
const [localBest,setLocalBest]=useState(Number);
const [bestLocal,setBestLocal]=useState(Number);
const startButton=useRef();
const displayHeart=useRef();
const scoreWiew=useRef()
const bestScoreView=useRef();
const pauseRef=useRef();





const startGame= ()=>{
    setStart(true);
    
    
}



let interval;
let interval2;

const change =()=> {
    setPause(true);
    setStart(false);

    interval=setInterval(() => {
        setStart(false)
     }, 1000);
    
       
    
     interval2= setInterval(() => {
            setStart(true)
        }, 2000);
    setScore((score)=>score+=1)

 
}



const pauseGame=()=> {
clearInterval(interval);
clearInterval(interval2);

console.log(interval);
}

   




useEffect(()=> {
    const posX= Math.floor(Math.random()*800);
    const posY= Math.floor(Math.random()*300);
    
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
},[start]);

  



if(score>best){
    setBest(score)
}


if(best>localBest){setLocalBest(best)};
useEffect(()=>{
    if(localBest) {
        localStorage.setItem('bestScore',JSON.stringify(localBest));
    }
 
    }
,[localBest])


useEffect(()=>{
    if(bestLocal>0) {
        setBestLocal(JSON.parse(localStorage.getItem('bestScore')));
    }
 
    
})


bestScoreView.current= 'best score:' + bestLocal;





console.log(score);








    return(

<div>
<div>
    <h1 id="title">Catch Me</h1>
    <h1 id="score" ref={scoreWiew} > {scoreWiew.current} <br /></h1>
    {bestLocal >0  &&  <h1> {bestScoreView.current}</h1>}
    
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