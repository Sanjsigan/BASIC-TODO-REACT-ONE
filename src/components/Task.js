import React from 'react'
import {FaTimes} from 'react-icons/fa'


function Task({taskName ,onDelete}) {
    return (
        <div>
            <h1>{taskName.name}</h1> <FaTimes style={{color:'red', cursor:'pointer'}} onClick={()=>onDelete(taskName.id)}/>
            <p>{taskName.dateofbirth}</p>
        </div>
    )
}

export default Task
