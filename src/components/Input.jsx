import styles from './Input.module.css';
import {PlusCircle} from 'phosphor-react'

export function Input(props){
  return (
    <div >
      <form onSubmit={props.handleCreateTask} className={styles.input}>
        <input onChange={props.handleNewTaskChange} value={props.newInputText} type="text" name="inputTask" placeholder='Adicione uma nova tarefa' />
        <button>Criar <PlusCircle className={styles.center} size={20} /></button>
      </form>
    </div>
  )
}