import Task from "./Task";

const Tasks = ({tasks, onDelete}) => {

    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete}/>
            ))}
        </>
    )
}

export default Tasks

// setTasks([...tasks, {"id": 3, "text": "Kill Bill", "day": "Mar 1st at 00:00 am", "reminder": true}])
