import type { ReactNode } from 'react';
import styles from './Header.module.css';

export interface HeaderProps {
  children: ReactNode;
}
function Header({children}: HeaderProps) {


  return (
    <>
    <div className={styles['header']}>
        <div className={styles['block']}>
            <h1 className={styles['title']}>Мой планер</h1>
        </div>
        {children}
    </div>
      
    </>
  )
}

export default Header