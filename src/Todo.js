function Todo({task, category, due_date}){
    return(
        <>
            <h1>Welcome</h1>
            <p> Your task is: {task}</p>
            <h2> Task category: {category} </h2>
            <p>It is due on: {due_date} </p>
        </>
    )
}

export default Todo