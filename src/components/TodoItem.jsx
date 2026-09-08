import { useState } from "react"

export default function TodoItem (props) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(props.value)

  const editClick = () => {
    if (!props.isComplete) {
      setEditValue(props.value)
      setIsEditing(true)
    }
  }

  const handleChange = (event) => {
    setEditValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.editTask(editValue)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  return (
    <>
      <div className="task-container">
        <input type="checkbox" onChange={props.completeTask} checked={props.isComplete} />
        <span className={props.isComplete ?  "task-completed" : ""}>{props.value}</span>
        <button className="edit-button" onClick={editClick}>Edit</button>
        <button className="delete-button" onClick={props.deleteTask}>Delete</button>
      </div>
      { isEditing &&
      <div className="modal-overlay">
        <div className="edit-tile-container">
          <form onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="edit-todo">Edit Task</label>
            <input 
              id="edit-todo"
              type="text"
              value={editValue}
              onChange={handleChange}
              placeholder="Edit task..."
              required
            />
            <button className="confirm-button" type="submit">Confirm</button>
            <button className="cancel-button" type="button" onClick={handleCancel}>Cancel</button>
          </form>
        </div>
      </div>
      }
    </>
  )
}