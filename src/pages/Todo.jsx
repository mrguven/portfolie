import { useRef, useState } from "react"

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


console.log(todoList);

}




return(

<div>

<h1>Toto List</h1>


<input type="text" name="" id="todo"  placeholder="write your tasks"
  onChange={(e)=>{setTodo(e.target.value)}} value={todo}/>
<button  onClick={addToList} >add</button>



<div>

{
    todoList && 
   
    todoList.map((task)=>{
       
       return(
         <ul key={id} id="taskList"><li> <h2 id="task" > {task.todo}</h2></li></ul>
       )
    })
    
}
</div>
</div>

 


)


}