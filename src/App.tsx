import React from 'react';
import './App.css';
import {TasksType, TodoList} from "./TodoList";

function App() {

    let tasks1:  Array<TasksType> = [
        {id: 1, title:"CSS", isDone : true},
        {id: 1, title:"JS", isDone : true},
        {id: 1, title:"React", isDone : true}
    ]
    let tasks2: Array<TasksType> = [
        {id: 1, title: "milk", isDone: true},
        {id: 1, title: "apples", isDone: true},
        {id: 1, title: "bananas", isDone: false}
    ]

    return (
        <div className="App">
            <div>
                <TodoList title="What to learn" tasks={tasks1}/>
                <TodoList title="What to bay" tasks={tasks2}/>
            </div>
        </div>
    );
}


export default App;
