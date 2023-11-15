import { useRef, useState } from "react"
import ok from '../ok.jpg'
import cross from '../cross.jpg'
export default function Todo(){

const [todoList,setTodoList]=useState([]);
const [todo,setTodo]=useState('');



const addToList=()=>{

console.log('hello');
if(todo!==''){
    setTodoList(
        [...todoList,todo]
    )
}else {
    alert('you should add somethings')
}


console.log(todoList);

}

const taskSucceed=()=>{



}

const taskDelete=(index)=>{
setTodoList(old=>{
 return old.filter((_,i)=>i!==index)
})

}



return(

<div id="todoContainer">
<h1 id="toDoTitle" >Toto List</h1>
<div >

<input type="text" name="" id="todo"  placeholder="write your tasks"
  onChange={(e)=>{setTodo(e.target.value)}} value={todo}/>
<button  onClick={addToList} >add</button>



<div>

{
    todoList && 
   
    todoList.map((task,index)=>{
       
       return(
        <div id="toDoList"  key={index}>
            <div className="taskList"  > <ul className="sublist"  ><li className="titleL2"> 
            <h2 className="taskh2" > -{task}  </h2>    </li></ul></div>
            <div className="OkImg"> <img className="img" src={ok} alt="ok" onClick={()=>{taskSucceed(index)}} /> </div> 
            <div className="deleteImg"> <img className="img" src={cross} alt="cross" onClick={()=>{taskDelete(index)}} />  </div>
        </div>
       )
    })
    
}
</div>
</div>
</div>

 


)


}