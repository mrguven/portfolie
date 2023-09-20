import {  useEffect, useState,useRef } from "react";
import heart from '../x.gif'

export default function CatchMe(){

const [item,setItem]=useState();
const [location,setLocation]=useState();
const [start,setStart]=useState(false);
const[con,setCon]=useState(2);
const [pause,setPause]=useState(false)
const[pic,setPic]=useState(heart);
const [score,setScore]=useState(0);

const [bestToLocal,setBestToLocal]=useState(0);
const [bestFromLocal,setBestFromLocal]=useState(0);
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



useEffect(()=>{
setCon((con)=>con--)
},[start])

const change =()=> {
    setPause(true);
    setStart(false);
setCon(2)
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
    let posX= Math.floor(Math.random()*800);
    let posY= Math.floor(Math.random()*300);
    
    console.log(posX);
 
    if (start) {startButton.current.style.display= 'none';
    displayHeart.current.style.display= 'block';
    displayHeart.current.style.position= 'relative';
    if (posX>window.innerWidth) {
        posX=window.innerWidth-50;
        displayHeart.current.style.left=posX+'px';
        displayHeart.current.style.width='50px';
        displayHeart.current.style.heigth='30px';
    }else {
        displayHeart.current.style.top=posY+'px';
        displayHeart.current.style.left=posX+'px';
    }
        
        
};

if(!start) {
    displayHeart.current.style.display= 'none';
}
scoreWiew.current= 'Score: '+ score;
},[start]);

 


console.log(window.innerWidth);


useEffect(()=>{
    
        if(score>bestToLocal){
            setBestToLocal(score);
            
        }
       
        if(bestToLocal>bestFromLocal){
    
            localStorage.setItem('bestScore',JSON.stringify(bestToLocal));
            
        }
        
        
  
 

        setBestFromLocal(JSON.parse(localStorage.getItem('bestScore')));

   
        console.log(score);
    
 
    }
,[score])


useEffect(()=>{
    
    setBestFromLocal(JSON.parse(localStorage.getItem('bestScore')));
   
})


bestScoreView.current= 'best score:' + bestFromLocal;
















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