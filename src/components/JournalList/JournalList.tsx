import styles from './JournalList.module.css';
type Task = {
    id: number
    title: string,
}
type JournalListProps = {
    items: Task[]
}
function JournalList({items}: JournalListProps) {
  return (
    <>
      <div className={styles['container']}>
            {items.length > 0 ? items.map( item => (
            <div key={item.id} className={styles['taskConteiner']}>
                <p className={styles['task']} key={item.id}>{item.title}</p>
                <button className={styles['done']}>+</button>
            </div>
            
            )): (<>У вас пока нет записей</>)}
      </div>
    </>
  )
}

export default JournalList