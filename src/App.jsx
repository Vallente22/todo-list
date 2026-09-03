import './App.css'

export default function App() {
  return (
    <>
      <header>
        <h1>My To Do List</h1>
      </header>

      <main>
        <section className="todo-input">
          <h2>Add a Task</h2>
          <label htmlFor="todo">
            <input 
              id="todo"
              type="text"
              placeholder="Enter a task..."
            />
          </label>
        </section>

        <section className="todo-display">
          <h2>My Tasks:</h2>
          
        </section>
      </main>
    </>
  )
}


