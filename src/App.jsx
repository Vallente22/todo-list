import { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css'

export default function App() {

  const [task, setTask] = useState("")

  const [todos, setTodos] = useState([])
  
  const handleSubmit = (event) => {
    event.preventDefault()
    setTodos(prevTodos => [
      ...prevTodos,
      {
        id: nanoid(), 
        value: task,
        complete: false
      } 
    ])
    setTask("")
  }

  const handleChange = (event) => {
    setTask(event.target.value)
  }

  const todoElements = todos.map((task) => {
    return (
      <div className="task-container">
        {task.value}
        <button>Edit</button>
        <button>Delete</button>
      </div>
    )
  })
  
  return (
    <>
      <header>
        <h1>My To Do List</h1>
      </header>

      <main>
        <section className="todo-input">
          <h2>Add Task</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="todo" className="sr-only">Add a Task</label>
            <input 
              id="todo"
              type="text"
              value={task}
              onChange={handleChange}
              placeholder="Enter a task..."
            />
            <button type="submit">Submit</button>
          </form>
        </section>

        <section className="todo-display">
          <h2>My Tasks:</h2>
          {todoElements}
        </section>
      </main>
    </>
  )
}


