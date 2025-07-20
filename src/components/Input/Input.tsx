
import { useState, useEffect } from 'react';
import styles from './Input.module.css';
import JournalList from '../JournalList/JournalList';


 export type Task = {
    id: number
    title: string,
}
function Input() {

  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
  const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
    }
  }, []);


  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const AddTask = (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    console.log(inputValue);
    const newTask = {
        id: tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1,
        title: inputValue
    };
    setTasks([...tasks, newTask])
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]))
    setInputValue('');
  }
  return (
    <>
        <form className={styles['input']} onSubmit={AddTask}>
            <input type='text' name='title' value={inputValue} onChange={changeInput}  className={styles['plan']} placeholder='Что нужно сделать сегодня'/>
            <button className={styles['button']}>+</button>
        </form>
        <div className={styles['list']}>
            <JournalList items={tasks}/>
        </div>
    </>
  )
}

export default Input