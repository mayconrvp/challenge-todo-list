import styles from './Header.module.css'

import logo from '../assets/rocket.svg'

export function Header(){
  return (
    <div>
      <header className={styles.header}>
        <img src={logo} alt="Logo Rocket" />
        <strong>
          <span className={styles.to}>to</span>
          <span className={styles.do}>do</span>
        </strong>
      </header>
    </div>
  )
}