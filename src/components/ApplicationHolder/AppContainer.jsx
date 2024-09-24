// This component will act as a main container of all elements inside the To-Do List

import React, { useState } from "react";
import InputTask from "../TaskInput/InputTask";
import TaskHolder from "../TaskHolder/TaskHolder";
import '../../assets/Styles/Styles.scss';

function AppContainer() {

    const [todos, setTodos] = useState([]);

    return (
        <>
            <div className="parent-container d-flex justify-content-center align-items-center vh-100">
                <div className="container w-100 h-50">
                    <div className="sub-container p-3">
                        <InputTask todos={todos} setTodos={setTodos}/>
                        <TaskHolder todos={todos} setTodos={setTodos}/>
                    </div>
                </div>
            </div>
          
        </>
    );
}

export default AppContainer;