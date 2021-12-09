import React,{useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


const App=() =>{

    const [showTask, setShowTask]=useState(false);
    const [tasks, setTask]=useState([
        {
            id:1,
            name:'Sanjsigan',
            dateofbirth:'1999-07-05',
            reminder:false
        },
        {
            id:2,
            name:'Raja',
            dateofbirth:'1999-07-05',
            reminder:true
        },
        {
            id:3,
            name:'Vijay',
            dateofbirth:'1999-07-05',
            reminder:true
        }
    ]) 
    //Delete
    const deleteTask=(id)=>{
      console.log('delete'+id)
      setTask(tasks.filter((task)=>task.id!==id))
    } 
    //Add Task
    const addTask =(task)=>{
      console.log(task);
      const id = Math.floor(Math.random()*10000)+1 

      const newTask ={id,...task}
      setTask([...tasks, newTask]); 
    }
  return (
    <div className="container col-6">
      <Header onAdd={()=>setShowTask(!showTask)} showAdd={showTask}   name={showTask ? 'Close Your Details': 'Add Your Details'}/>
     { showTask &&<AddTask onAdd={addTask}/>} 
      {tasks.length>0 ?  <Tasks tasklist={tasks} onDelete={deleteTask}/> :'No Task to show'}
    
    </div>
  );
}

export default App;
