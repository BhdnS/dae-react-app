import { memo } from 'react'
import styles from './ButtonClose.module.scss'

const ButtonClose = memo(({ handleClose, className }) => {
  const styleBtn = `${styles.close} ${className}`

  return (
    <div onClick={handleClose} className={styleBtn}>
      <div className={styles.closeLine}></div>
      <div className={styles.closeLine}></div>
    </div>
  )
})

export default ButtonClose
