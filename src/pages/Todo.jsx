import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import InputTask from '../components/InputTask'
import TasksList from '../components/TasksList'

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [isActive, setIsActive] = useState('todo');
    const [trigger, setTrigger] = useState(false);

    const handleActive = (e) => {
        setIsActive(e);
    }

    useEffect(() => {
        fetchTasks();
    }, [isActive, trigger])

    const fetchTasks = async () => {
        const completed = isActive === 'done' ? true : false;
        const response = await fetch(`http://localhost:3001/todos?completed=${completed}`);
        const data = await response.json();
        setTasks(data)
    }

    const addTask = async (task) => {
        const res = await fetch(
            'http://localhost:3001/todos', {
              method: 'POST',
              headers: {
                'Content-type': 'application/json'
              },
              body: JSON.stringify(task)
            }
        )
    
        const data = await res.json()
        console.log('ini task baru', data)
    }

    const updateTask = async (task) => {
        const res = await fetch(
            `http://localhost:3001/todos/${task.id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(task)
            }
        )

        const data = await res.json()
        console.log('ini task update', data)
    }

    const deleteTask = async (id) => {
        const res = await fetch(
            `http://localhost:3001/todos/${id}`, {
                method: 'DELETE'
            }
        )
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col text-center">
                    <Header 
                        isActive={isActive} 
                        handleActive={handleActive} 
                    />
                    <InputTask 
                        onAdd={addTask} 
                        trigger={trigger} 
                        setTrigger={setTrigger}
                    />
                    <TasksList 
                        tasks={tasks} 
                        isActive={isActive} 
                        updateTask={updateTask}
                        trigger={trigger}
                        setTrigger={setTrigger}
                        deleteTask={deleteTask}
                    />
                    <Link to="/about">About</Link>
                </div>
            </div>
        </div>
    )
}

export default Todo
