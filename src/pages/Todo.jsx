import { useEffect, useRef, useState } from "react"
import ok from '../ok.jpg'
import cross from '../cross.jpg'
export default function Todo(){

const [todoList,setTodoList]=useState([]);
const [todo,setTodo]=useState('');
const [todoDone,setTODoDone]=useState([])
const [errorMsg,setErrorMsg]=useState()
const [doneListFromLocae,setoneListFromLocal]=useState([]);
const [todoListFromLocal,setTodoListFromLocal]=useState([])
const taskInput = useRef()

const addToList=()=>{

console.log('hello');
if(todo!==''){
    setTodoList(
        [...todoList,todo]
    )
}else {
    setErrorMsg( "*add a task")
}


setTodo('')

taskInput.current.focus()

}

const taskSucceed=(index)=>{
    setTodoList(old=>{
        return old.filter((_,i)=>i!==index)
    })
    setTODoDone(
        [...todoDone,todoList[index]]
    )

}

const taskDelete=(index)=>{
setTodoList(old=>{
 return old.filter((_,i)=>i!==index)
})



}

const DonetaskDelete=(index)=>{
    setTODoDone(old=>{
        return old.filter((_,a)=>a!==index)
       })
}




useEffect(()=>{

if(todoList !=='' & todoDone!=='') {
    localStorage.setItem('todoList',JSON.stringify(todoList));
    localStorage.setItem('todoDone',JSON.stringify(todoDone));
}

},[todoDone,todoList])




useEffect(()=>{

    const items = JSON.parse(localStorage.getItem('todoList'));
    if (items) {
        setTodoList(items);
    }

    const list = JSON.parse(localStorage.getItem('todoDone'));
    if (list) {
        setTODoDone(list);
    }




},[])



return(

<div id="todoContainer">
<h1 id="toDoTitle" >ToDo List</h1>


<input type="text" name="todoList" id="todoInput" autoFocus placeholder="your tasks"
  onChange={(e)=>{setTodo(e.target.value);setErrorMsg('')}  } ref={taskInput} value={todo}/>
  <p id="errorMsg"> {errorMsg}</p>
<button id="todoButton" onClick={addToList} >+</button>


<div id="todoAds"></div>
<div id="mainList" >
<h2  className="taskTitle">WE ARE WAITING YOU</h2>
{
    todoList && 
   
    todoList.map((task,index)=>{
       
       return(
        <div id="toDoList" key={index}>
            
            <div className="taskList"  > <ul className="sublist"  ><li className="titleL2"> 
            <h2 className="taskh2" > {task}  </h2>    </li></ul></div>
            <div className="OkImg"> <img className="img" src={ok} alt="ok" onClick={()=>{taskSucceed(index)}} /> </div> 
            <div className="deleteImg"> <img className="img" src={cross} alt="cross" onClick={()=>{taskDelete(index)}} />  </div>
        </div>
       )
    })
    
}
</div>

<div id="doneList">
<h2 className="taskTitle">THANKS, WE ARE DONE</h2>
{ 
    todoDone && 
   
    todoDone.map((doneTask,index)=>{
       
       return(
        <div id="todoDone" key={index}>
           
            <div className="donetaskList"  > <ul className="sublist"  ><li className="titleL2"> 
            <h2 className="taskh2" > {doneTask}  </h2>    </li></ul></div>
          
            <div className="deleteImg"> <img className="img" src={cross} alt="cross" onClick={()=>{DonetaskDelete(index)}} />  </div>
        </div>
       )
    })
    
}
</div>
</div>

 


)


}