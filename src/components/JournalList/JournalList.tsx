import styles from './JournalList.module.css';
type Task = {
    id: number
    title: string,
}
type JournalListProps = {
    items: Task[],
    onCompletedTask: (id: number) => void
}

function JournalList({items, onCompletedTask}: JournalListProps) {

  const mySort = (a: { id: number }, b: { id: number }) => b.id - a.id;
  return (
    <>

            {items.length > 0 ? items.sort(mySort).map( item => (
            <div key={item.id} className={styles['taskConteiner']}>
                <p className={styles['task']} key={item.id}>{item.title}</p>
                <button className={styles['done']} onClick={() => onCompletedTask(item.id)}>done</button>
            </div>
            
            )): (<>У вас пока нет записей</>)}
    </>
  )
}

export default JournalList