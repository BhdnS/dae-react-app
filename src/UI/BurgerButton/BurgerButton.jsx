import { memo } from 'react'
import styles from './BurgerButton.module.scss'

const BurgerButton = memo(({ onClick, viewMenu }) => {
  const view = viewMenu
    ? `${styles.burger} ${styles.burgerActive}`
    : `${styles.burger}`

  return (
    <div className={view} onClick={() => onClick()}>
      <span className={styles.burgerLine}></span>
      <span className={styles.burgerLine}></span>
      <span className={styles.burgerLine}></span>
    </div>
  )
})

export default BurgerButton
