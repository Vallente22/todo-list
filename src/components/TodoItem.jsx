export default function TodoItem (props) {
  return (
    <div className="task-container">
      <input type="checkbox" onChange={props.completeTask} />
      {props.isComplete && <span>Completed!</span>}
      {props.value}
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}