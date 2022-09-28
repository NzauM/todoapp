import { useState } from "react"

function Todoform({formSubmitted, todoslength}) {
    const[newTodo, setnewTodo] = useState({"id":todoslength+=1})
    console.log(todoslength)
    function handleInput(e){
        let value = e.target.value
        let name = e.target.name
        console.log(`value is ${value}`)
        console.log(`name is ${name}`)
        // let data = {[name]: value}
        setnewTodo({...newTodo,[name]: value})
        
        
    }
    function handleAddTodo(e){
      e.preventDefault()
      console.log(newTodo)
      fetch("http://localhost:3000/todos",{
        // method, headers, body
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
      })
      .then((res)=> res.json())
      .then((data)=>
        console.log(data)
      )
      formSubmitted()

    }

    console.log(newTodo)
  return (
    <>
      <form onSubmit={handleAddTodo}>
        <label>
          Task:
          <input onBlur={handleInput} type="text" name="task" />
        </label>
        <label>
          Category:
          <input onBlur={handleInput} type="text" name="category" />
        </label>
        <label>
          Due_date:
          <input onBlur={handleInput} type="text" name="due_date" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
export default Todoform;
