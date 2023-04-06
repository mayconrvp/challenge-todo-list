import styles from './TaskSpace.module.css'
import clipboard from '../assets/Clipboard.svg'
import { Task } from './Task'
import { useState } from 'react'


export function TaskSpace({tasks, setTasks, deleteTask}){
  
  const [tasksConcluded, setTasksConcluded] = useState(0);

  function getSumTasksConcluded() {
    const val = tasks.reduce((total, task) => {
      if(task.isConcluded) return total += 1;
      else return total
    }, 0)
    setTasksConcluded(val)
  } 


  function setAsConcluded(id){
    let taskIndex = tasks.findIndex(task => task.id == id);
    if(taskIndex >= 0){
      let newTasks = [...tasks];
      newTasks[taskIndex].isConcluded = !newTasks[taskIndex].isConcluded;
      setTasks(newTasks)
      getSumTasksConcluded();
    }
  }
  
  return (
    <div className={styles.main}>
      <div className={styles.totals}>
        <span className={styles.created}>Tarefas criadas <div className={styles.spanTotal}>{tasks.length}</div></span>
        <span className={styles.concluded}>Concluídas <div className={styles.spanTotal}>{tasksConcluded}</div></span>
      </div>

      {
        tasks.length == 0 ? (
          <div className={styles.space}>
            <div className={styles.empty} id='divEmpty'>
              <img src={clipboard} alt="Ícone de tarefa" height={56} />
              <span><strong>Você ainda não tem tarefas cadastradas</strong></span>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </div>
          ) : (
          <div className={styles.space2}>
            {tasks.map(task => {
              return (
                <Task 
                  key={task.id} 
                  title={task.description} 
                  id={task.id} 
                  isConcluded={task.isConcluded} 
                  deleteTask={deleteTask}
                  setAsConcluded={setAsConcluded}
                />
              )
            })}
          </div>
        )
      }
    </div>
  )
}

