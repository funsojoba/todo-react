import './App.css';
import Forms from './components/Forms'
import TaskList from './components/TaskList'
import {useState} from 'react'
import Counter from './components/counter'


const App = ()=>{
  
  const [title, setTitle]= useState('')
  const [description, setDescription] = useState('')
  const [completed, setCompleted]=useState(false)
  const [tasks, setTasks] = useState([])
  // const [editing, setEditing] = useState(false)

  const handleTitle = (e)=>{
    setTitle(e.target.value)
  }

  const handeDescription = (e)=>{
    setDescription(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    let task = {
       title, description, completed
    }
    setTasks([...tasks].concat(task))

  }

  const handleDelete = (e)=>{
    let newList = [...tasks].filter((task)=> task.title !== e.title)
    setTasks(newList)
  }

  const handleCompleted =(e)=>{
    e.completed = !e.completed
    setCompleted(e.completed)
  }

  const handleEdit =(e)=>{
    console.log(e)
  }

     return (
        <div className="task-container">
          <Counter count={tasks.length}/>
          <Forms 
              count={tasks.length}
              handleInput={handleTitle}
              handleTextarea={handeDescription} 
              handleSubmit={handleSubmit}
              />
          <TaskList 
              tasks={tasks}
              handleDelete={handleDelete} 
              handleCompleted={handleCompleted}
              handleEdit={handleEdit}
              />

        </div>
  );
  
}


export default App;
