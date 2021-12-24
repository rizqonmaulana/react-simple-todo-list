import Task from './Task'

const TasksList = ({ tasks, updateTask, trigger, setTrigger, deleteTask }) => {
    return (
        <>
            <ul className="list-group">
            {
                tasks.map(task => (
                    <Task 
                        key={task.id}
                        task={task}
                        updateTask={updateTask}
                        trigger={trigger}
                        setTrigger={setTrigger}
                        deleteTask={deleteTask}
                    />
                ))
            }
            </ul>
        </>
    )
}

export default TasksList
