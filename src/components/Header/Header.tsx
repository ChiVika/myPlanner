import styles from './Header.module.css';

function Header() {


  return (
    <>
    <div className={styles['header']}>
        <div className={styles['block']}>
            <h1 className={styles['title']}>Мой планер</h1>
        </div>
        <div className={styles['content']}>
            задачи
        </div>
    </div>
      
    </>
  )
}

export default Header