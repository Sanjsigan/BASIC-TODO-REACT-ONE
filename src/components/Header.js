import React from 'react'
import Button from './Button';

const Header=({name,onAdd,showAdd})=>{
const onClick=()=>{
    console.log('hiii');
}

    return( 
        <header className="container">
            <h1  >{name}</h1>
            <Button className="btn" color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' :'Add'} textColor='white' onClick={onAdd}/> 
        </header>
    )
} 

export default Header;

