import { useRef, useState } from "react"
import ok from '../ok.jpg'
import cross from '../cross.jpg'
export default function Todo(){

const [todoList,setTodoList]=useState([]);
const [todo,setTodo]=useState('');


let id;
const addToList=()=>{
console.log('hello');
if(todo!==''){
    setTodoList(
        [...todoList,{todo:todo, id:todoList.length}]
    )
}else {
    alert('you should add somethings')
}

console.log(todoList.id);
console.log(todoList);

}




return(

<div>

<h1>Toto List</h1>
<div id="todoContainer">

<input type="text" name="" id="todo"  placeholder="write your tasks"
  onChange={(e)=>{setTodo(e.target.value)}} value={todo}/>
<button  onClick={addToList} >add</button>



<div>

{
    todoList && 
   
    todoList.map((task)=>{
       
       return(
        <div id="toDoContainer">
            <div className="taskList"  > <ul className="sublist" key={id} ><li className="titleL2"> <h2 className="taskh2" > -{task.todo}  </h2>    </li></ul></div>
            <div className="OkImg"> <img className="img" src={ok} alt="ok" /> </div> 
            <div className="deleteImg"> <img className="img" src={cross} alt="cross" />  </div>
        </div>
       )
    })
    
}
</div>
</div>
</div>

 


)


}