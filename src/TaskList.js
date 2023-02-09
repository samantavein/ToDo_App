import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, enterEditMode }) => {
  return (
    <ul >
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