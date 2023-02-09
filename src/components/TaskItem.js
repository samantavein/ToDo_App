// katrs atsevišks ieraksts/ udevums kas attēlojas home page



// styles
import styles from './TaskItem.module.css';

// Library imports

const TaskItem = ({ task, deleteTask,  enterEditMode }) => {

  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <label
          htmlFor={task.id}
          className={styles.label}
        >
          {task.name}

        </label>
      </div>
      <div className={styles["task-group"]}>
        <button
          className='btn'
          aria-label={`Update ${task.name} Task`}
          onClick={() => enterEditMode(task)}
        >
          Edit
        </button>

        <button
          className={`btn ${styles.delete}`}
          aria-label={`Delete ${task.name} Task`}
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>

      </div>
    </li>
  )
}
export default TaskItem