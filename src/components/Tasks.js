import React  from 'react'
import Task from './Task'

const Tasks = ({tasklist,onDelete}) => {

    return (
        <div>
            {tasklist.map((task)=>(
             <Task key={task.id} taskName={task} onDelete={onDelete} />
            ))}
        </div>
    )
}

export default Tasks
