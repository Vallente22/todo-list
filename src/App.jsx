import { useState } from 'react'
import { nanoid } from 'nanoid'
import './styles/App.css'
import TodoItem from './components/TodoItem'

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
        isComplete: false
      } 
    ])
    setTask("")
  }

  const handleChange = (event) => {
    setTask(event.target.value)
  }

  const completeTask = (id) => {
    setTodos(prevTodos => 
      prevTodos.map(todo => {
        if (todo.id === id) {
          return {...todo,
            isComplete: !todo.isComplete
          }
        } else return todo
      })
    )
  }

  const editTask = (id, newValue) => {
    setTodos(prevTodos => 
      prevTodos.map(todo => {
        if (todo.id === id) {
          return {...todo,
            value: newValue
          }
        } else return todo
      })
    )
  }
  

  const todoElements = todos.map((task) => {
    return (
      <TodoItem 
        key={task.id} 
        id={task.id} 
        value={task.value} 
        isComplete={task.isComplete} 
        completeTask={() => completeTask(task.id)}
        editTask={(newValue) => editTask(task.id, newValue)}
      />
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
              required
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


