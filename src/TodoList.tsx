import React from "react";
import {Button} from "./Button";

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}

type TodoListPropsType = {
    title: string
    tasks: Array<TasksType>
}

    ;
export function TodoList (props: TodoListPropsType) {

    const tasksList: Array<JSX.Element> = []
    for (let i = 0; i < props.tasks.length; i++) {
        const task: JSX.Element = <li>
            <input type="checkbox" checked={props.tasks[i].isDone}/>
            <span>{props.tasks[i].title}</span>
        </li>
        tasksList.push(task)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <Button name="+"/>
            </div>
            <ul>
                {tasksList}

            </ul>
            <div>
                <Button name='All'/>
                <Button name='Active'/>
                <Button name='Completed'/>
            </div>
        </div>)
}