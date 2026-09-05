import { useState } from "react"

export default function TodoItem (props) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(props.value)

  const editClick = () => {
    setIsEditing(prev => !prev)
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
        <input type="checkbox" onChange={props.completeTask} />
        <span className={props.isComplete ?  "task-completed" : ""}>{props.value}</span>
        <button className="edit-button" onClick={editClick}>Edit</button>
        <button className="delete-button">Delete</button>
      </div>
      { isEditing &&
        <div className="edit-tile-container">
          <form onSubmit={handleSubmit}>
            <input 
              id="todo"
              type="text"
              value={editValue}
              onChange={handleChange}
              placeholder="Edit task..."
              required
            />
            <button type="submit">Confirm</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </form>
        </div>
      }
    </>
  )
}