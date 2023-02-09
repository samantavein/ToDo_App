
const TaskItem = ({ task, deleteTask,  enterEditMode }) => {

  return (
    <li >
      <div >
        <label
          htmlFor={task.id}
        >
          {task.name}

        </label>
      </div>
      <div >
        <button   
          onClick={() => enterEditMode(task)}
        >
          Edit
        </button>

        <button
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>

      </div>
    </li>
  )
}
export default TaskItem