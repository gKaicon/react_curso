import React from 'react'
import PropTypes from 'prop-types'
import TaskItem from './TaskItem'


export default function TaskList({title, onAddTask, tasks, onTaskUpdate}) {

    const addTask = () => {
        onAddTask('Nova Tarefa', 'Pendente');
    }

    return (
        <>
            <div className="col my-2 task-item border rounded-3 mx-1">
                <div className="rounded-3 border bg-secondary opacity-75 text-white my-2">{title}</div>
                <div className="container">
                    {tasks.map((task)=>{
                        return <TaskItem key={task.id} id={task.id} title={task.title} taskState={task.state} onTaskUpdate={onTaskUpdate}/>
                    })} 
                </div>
                <button className="" onClick={addTask}> Adicionar tarefa</button>
            </div>

        </>
    )
};

TaskList.propTypes = {
    title: PropTypes.string.isRequired,
    onAddTask: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired
}