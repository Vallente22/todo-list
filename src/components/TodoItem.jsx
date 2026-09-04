export default function TodoItem (props) {
  return (
    <div className="task-container">
      <input type="checkbox" onChange={props.completeTask} />
      <span className={props.isComplete ?  "task-completed" : ""}>{props.value}</span>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}