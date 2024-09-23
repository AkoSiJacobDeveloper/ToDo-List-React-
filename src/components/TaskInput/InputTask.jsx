import React, { useState } from 'react';

function InputTask() {

    // State to store user input(task)
    const [taskValue, setTaskValue] = useState('');

    // Update the state when user types in the input field
    const handleValueChange = (event) => {
        setTaskValue(event.target.value);
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <div className="container p-md-3">
                <form className='d-flex gap-1' onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={taskValue}
                        onChange={handleValueChange}
                        placeholder='Enter Task'
                        className='p-md-3 w-100'
                    />
                    <button className='p-md-2 w-25 border-0' type='submit'>Add</button>
                </form>
            </div>
        </>
    );
}

export default InputTask;