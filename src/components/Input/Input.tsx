
import { useState, useEffect } from 'react';
import styles from './Input.module.css';
import JournalList from '../JournalList/JournalList';


 export type Task = {
    id: number
    title: string,
}

export interface InputProps {
  onAddTask: (title: string) => void;
}
function Input({onAddTask}: InputProps) {

  const [inputValue, setInputValue] = useState('');
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddTask(inputValue);
    setInputValue('');
  };


  
  return (
    <>
        <form className={styles['input']} onSubmit={handleSubmit}>
            <input type='text' name='title' value={inputValue} onChange={changeInput}  className={styles['plan']} placeholder='Что нужно сделать сегодня'/>
            <button className={styles['button']}>+</button>
        </form>
        
    </>
  )
}

export default Input