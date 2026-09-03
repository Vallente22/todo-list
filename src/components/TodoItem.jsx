export default function Tasks (props) {
  return (
    <div className="task-container">
      <input type="checkbox" />
      {props.value}
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}