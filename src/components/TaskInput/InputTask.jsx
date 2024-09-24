import React, { useState } from 'react';

function InputTask({todos, setTodos} ) {

    // const {todos, stTodos} = props

    // State to store user input(task)
    const [taskValue, setTaskValue] = useState('');


    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        setTodos([...todos, taskValue])
        setTaskValue('')
        
    }

    return (
        <>
            <div>
                <form className='d-flex gap-1' onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={taskValue}
                        onChange={(e)=> setTaskValue(e.target.value)}
                        placeholder='Enter Task'
                        className='p-md-3 w-100'
                        required
                    />
                    <button className='p-md-2 w-25 border-0' type='submit'>Add</button>
                </form>
            </div>
        </>
    );
}

export default InputTask;