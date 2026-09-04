export default function TodoItem (props) {
  return (
    <div className="task-container">
      <input type="checkbox" onChange={props.completeTask} />
      <span className={props.isComplete ?  "task-completed" : ""}>{props.value}</span>
      <button className="edit-button">Edit</button>
      <button className="delete-button">Delete</button>
    </div>
  )
}