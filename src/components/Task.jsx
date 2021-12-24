import { useState, useEffect } from 'react';
import { FormGroup, Input } from 'reactstrap';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, updateTask, trigger, setTrigger, deleteTask }) => {
    const [complete, setComplete] = useState(task.completed);

    useEffect(() => {
        updateTask({ ...task, completed: complete });
        setTrigger(!trigger);
    }, [complete])

    const handleDelete = () => {
        deleteTask(task.id);
        setTrigger(!trigger);
    }

    const taskStyle = {
        width: '300px',
        margin: '0 auto',
        textAlign: 'left',
        color: '#545454',
        fontSize: '14px',
    }

    return (
        <li 
            style={taskStyle}
            className="list-group-item"
        >
            <FormGroup check>
            <div className="d-flex justify-content-between">
                <div className="mr-auto p-2">
                    {task.title}
                </div>
                <div className="p-2">
                    <FaTimes
                        style={{ cursor: 'pointer', color: 'red' }}
                        onClick={handleDelete}
                    />
                    <Input
                        id="checkbox2"
                        type="checkbox"
                        onChange={() => setComplete(!complete)}
                        checked={complete ? true : false}
                    />
                </div>
            </div>
            </FormGroup>
        </li>
    )
}

export default Task
