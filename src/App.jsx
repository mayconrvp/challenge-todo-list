import { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { TaskSpace } from './components/TaskSpace'

function App() {
  const [tasks, setTasks] = useState([])
  const [newInputText, setNewInputText] = useState("")

  function handleCreateTask() {
    event.preventDefault();
    if(newInputText.trim() != ""){
      let newTask = {
        id: uuidv4(),
        description: newInputText,
        isConcluded: false
      }
      setTasks([...tasks, newTask])
      setNewInputText('');
    }
  }

  function handleNewTaskChange(){
    setNewInputText(event.target.value);
  }

  function deleteTask(id){
    const newTasks = tasks.filter(task => task.id != id);
    setTasks(newTasks);
  }

  return (
    <div className={styles.wrapper}>
      <Header/>
      <main>
        <Input 
          handleCreateTask={handleCreateTask} 
          handleNewTaskChange={handleNewTaskChange}
          setNewInputText={setNewInputText} 
          newInputText={newInputText} 
        />
        <TaskSpace tasks={tasks} setTasks={setTasks} deleteTask={deleteTask}/>
      </main>
    </div>
  )
}

export default App
