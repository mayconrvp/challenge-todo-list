import React from 'react';
import { ThumbsUp, Trash } from 'phosphor-react'
import check from '../assets/check.svg'
import styles from './Task.module.css'

export function Task({title, id, isConcluded, deleteTask, setAsConcluded}) {
  return (
    <div className={styles.task}>
      <div className={isConcluded ? styles.info + " " + styles.concluded : styles.info}>
        <label onClick={(()=>setAsConcluded(id))} className={styles.labelTask}>
          <img  className={styles.check} src={check} alt="" />
          <span >{title}</span>
        </label>
      </div>
      <button onClick={()=>deleteTask(id)} title='Deletar comentário'>
        <Trash size={24}/>
      </button>
    </div>
  );
}


