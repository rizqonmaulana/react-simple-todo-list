import { useState } from 'react';

import { InputGroup, Input, Button } from 'reactstrap';

import ButtonCustom from './ButtonCustom';

const InputTask = ({onAdd, trigger, setTrigger}) => {
    const [task, setTask] = useState('');

    const inputStyle = {
        width: '300px',
        margin: '10px auto',
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
        if (!task){
            alert('Please enter the task');
        }

        onAdd({title:task, completed:false})

        setTask('');
        setTrigger(!trigger);
    }

    return (
       <form onSubmit={onSubmit}>
            <div>
                <InputGroup
                    style={inputStyle}
                >
                    <Input 
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Enter todo" 
                    />
                    <Button>
                        Add
                    </Button>
                </InputGroup>
            </div>
       </form>
    )
}

export default InputTask
