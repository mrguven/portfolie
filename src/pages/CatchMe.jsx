import {  useEffect, useState,useRef } from "react";
import heart from '../heart-beat.gif'

export default function CatchMe(){

const [item,setItem]=useState();
const [location,setLocation]=useState();
const [start,setStart]=useState(false);
const[con,setCon]=useState(false);
const [pause,setPause]=useState(false)
const[pic,setPic]=useState(heart);
const [score,setScore]=useState(Number);

const [bestToLocal,setBestToLocal]=useState(Number);
const [bestFromLocal,setBestFromLocal]=useState(Number);
const [interval1,setInterval1]=useState(null);
const [interval2,setInterval2]=useState(null)
const startButton=useRef();
const displayHeart=useRef();
const scoreWiew=useRef()
const bestScoreView=useRef();
const pauseRef=useRef();





const startGame= ()=>{
    setStart(true);
    
    
}





const change =()=> {
    setPause(true);
    setStart(false);

if((interval1 && interval2) === null) {
    setInterval1(setInterval(() => {
        setStart(false)
     }, 1000))
    
       
    
     setInterval2(setInterval(() => {
            setStart(true)
        }, 2000))
    }
    setScore((score)=>score+=1)

 setPause(true)
}



const pauseGame=()=> {
    setStart(false)

    clearInterval(interval1);
    clearInterval(interval2);
    setInterval1(null);
    setInterval2(null);
setPause(false);
startButton.current.style.display= 'block';

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

 





useEffect(()=>{
    
    if(score>bestToLocal){
        setBestToLocal(score)
    }
    setBestFromLocal(JSON.parse(localStorage.getItem('bestScore')));
    
    if(bestToLocal>bestFromLocal){

    localStorage.setItem('bestScore',JSON.stringify(bestToLocal))
}
    

   

    
 
    }
,[score])


useEffect(()=>{
    setBestFromLocal(JSON.parse(localStorage.getItem('bestScore')));
   
},[score])


bestScoreView.current= 'best score:' + bestFromLocal;







console.log(score);








    return(

<div>
<div>
    <h1 id="title">Catch Me</h1>
    <h1 id="score" ref={scoreWiew} > {scoreWiew.current} <br /></h1>
    {bestFromLocal >0  &&  <h1> {bestScoreView.current}</h1>}
    
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