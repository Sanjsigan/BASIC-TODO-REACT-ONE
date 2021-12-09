import React from 'react'

const Button=({color, text, onClick,textColor})=> {

    return (
        <button onClick={onClick} className="btn" style={{backgroundColor:color, color:textColor}}>{text}</button>
    )
}

export default Button
