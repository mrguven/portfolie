import { useRef, useState } from "react"

export default function Todo(){

const [todoList,setTodoList]=useState([]);
const [todo,setTodo]=useState('');
const result=useRef();


const addToList=()=>{
console.log('hello');
setTodoList(
    [...todoList,todo]
)

console.log(todoList);

}




return(

<div>

<h1>Toto List</h1>


<input type="text" name="" id="todo"  placeholder="write your tasks"
  onChange={(e)=>{setTodo(e.target.value)}} value={todo}/>
<button  onClick={addToList} >add</button>

<h3 ref={result} ></h3>

</div>

 


)


}