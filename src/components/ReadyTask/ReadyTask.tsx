import styles from './ReadyTask.module.css';

export interface CountTaskProps{
    count: number
};

function ReadyTask({count}: CountTaskProps) {

  return (
    <div className={styles['block']}>
        <p className={styles['text']}>Выполненные задачи</p>
        <p className={styles['count']}>{count}</p>
    </div>
  )
}

export default ReadyTask