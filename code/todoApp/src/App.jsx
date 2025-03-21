import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'

function App() {

  const [task, setTask] = useState('');  //default value is empty string
  const [todos, setTodos] = useState([]);  //default value is empty array
  const [error, setError] = useState('')

  const handleClick = () => {
    if(task.trim() == '')
    {
      setError('Please enter some value');
    }
    setTodos([...todos, task])    //   spread operator (...) => expanding   ex. a = [2,3]  and c = [...a, 4]  then  d = [2,3,4]
    setTask('') 
  }
  
  return (
    <>
      <h1>Todo App</h1>
      <div>
        <input type="text" placeholder='Enter the task ' 
        onChange={ (e)=>setTask(e.target.value)}
        value={task} />
        <button onClick={handleClick}>Submit</button>
      </div>
      
      <div>
        <Todos data={error}/>
      </div>

      {/* // components calling */}
      <div>
        <Todos data={todos}/>    
      </div>

    </>
    
  )
}

export default App