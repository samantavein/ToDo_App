// Basically home page, kas nem infro no TaskIem - katru arsecušķo ierakstu un ievieto listā

// component import
import TaskItem from './TaskItem';

// styles
import styles from './TaskList.module.css';

const TaskList = ({ tasks, deleteTask, enterEditMode }) => {
  return (
    <ul className={styles.tasks}>
      {tasks.sort((a, b) => b.id - a.id).map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          enterEditMode={enterEditMode}
        />
      ))
      }
    </ul>
  )
}
export default TaskList