import React,{useState} from 'react'

function AddTask({onAdd}) {
    const [name , setName]=useState('');
    const [date , setDate]=useState('');
    const [reminder , setDeminder]=useState(false); 

    const onSubmit=(e)=>{
        e.preventDefault();
         
        if(!name) {
            alert('please enter a text')
            return
        } 

        onAdd({name, date,reminder});
    }
    
    return (
        <form className="container" onSubmit={onSubmit}>
            <div className="form-group">
                <label>Name</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} className="form-control" type="text" placeholder="Name"/>
            </div>

            <div className="form-group">
                <label>Date of birth</label>
                <input  value={date} onChange={(e)=>setDate(e.target.value)} className="form-control" type="text" placeholder="Date of birth"/>
            </div> 

            <div className="form-groupl">
                <label>Reminder</label>
                <input value={reminder} onChange={(e)=>setDeminder(e.target.checked)} className="form-check-input form-control" type="checkbox"/>
            </div> 
                <br/>
            <input className="form-control btn btn-primary" type="submit" value="Add details" />
        </form>
    )
}

export default AddTask
