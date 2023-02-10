
const TaskItem = ({ task, deleteTask,  enterEditMode }) => {

  return (
    <li >
      <div >
        <label
          key={task.id}
        >
          {task.name} - {task.description} <br /> {task.date}

        </label>

        <button
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
        <button   
          onClick={() => enterEditMode(task)}
        >
          Edit
        </button>

      </div>
    </li>
  )
}
export default TaskItem