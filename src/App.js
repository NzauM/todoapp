import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Todo from './Todo';
import Todoform from './Todoform';

function App() {
  const[mytodos, setmytodos] = useState([])
  const[todosNo, settodosNo] = useState(0)
  const[todoAdded, settodoAdded] = useState(true)
  // view all todos
  // Fetch todos from localhost/3000/todos
  console.log(mytodos)
  useEffect(()=>{
    fetch("http://localhost:3000/todos")
    .then((res)=>res.json())
    .then((data)=>{
      // console.log(data)
      setmytodos((mytodos)=>data)
      settodosNo((todosNo)=>data.length)
    })
  },[todoAdded])
  console.log(todosNo)
  // Set our todos to a state variable



  let todolist = mytodos.map((elem, ind)=>{
    return(
      <Todo key={ind} task={elem.task} category={elem.category} due_date={elem.due_date} />
    )
  })
  // Have a function that is triggered once a new todo is submitted
  // The function is going to change a state variable
  // Add the state variable as a dependency to the fetch side function
   
  function handleNewTodo(){
    console.log("Parent function is triggered")
    settodoAdded((todoAdded)=>!todoAdded)
  }
  return (
    <>
      <h1>Karibu huku</h1>
      <Todoform formSubmitted={handleNewTodo} todoslength={todosNo}/>
      {todolist}
    </>
  );
}

export default App;
