import {useEffect, useState} from "react";
import { addTask, toggleTask, deleteTask } from "./actions";
import taskStore from "./TaskStore";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
            setTasks(taskStore.getTasks());
    }, []);


    const handleAddTask = () => {
        console.log("fsffsfdf");
        const taskName = prompt("Enter task name: ");
        if(taskName) {
            addTask({id: Date.now(), name: taskName, completed: false});
        }
    }

    const handleToggleTask = (id) => {
        toggleTask(id);
    }

    const handleDeleteTask = (id) => {
        deleteTask(id);
    }

    return (
        <div>
            <button className="btn btn-outline-primary my-4" onClick={handleAddTask}>Add new Task</button>
            <ul className="list-group">
                {tasks.map(task => (
                    <li className="list-group-item my-2" key={task.id}>
                        <input type="checkbox" checked={task.completed} onChange={() => handleToggleTask(task.id)}/>
                        <span className={task.completed ? "text-decoration-line-through" : ""}>{task.name}</span>
                        <button className="btn btn-outline-danger" onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList;