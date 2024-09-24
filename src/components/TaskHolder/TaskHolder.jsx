import React, { useState } from 'react';
import '../../assets/Styles/Styles.scss';

function TaskHolder({ todos, setTodos }) {
    return (
        <>
            <div className='task-holder'>
                <div className='container mt-2 w-100'>
                    <div className='task-items'>
                        {todos.map((todo, index) => (
                            <div className='d-flex'  key={index}>
                                <p>{todo}</p>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );

    function handleDelete(index) {
        // Logic to delete the todo
        setTodos(prevTodos => prevTodos.filter((_, i) => i !== index));
    }
}

export default TaskHolder;
