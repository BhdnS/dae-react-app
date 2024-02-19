import { useContext } from 'react'
import ContextMenuToggle from '../../state/menu/ContextMenuToggle.js'
import styles from './Mask.module.scss'

const Mask = () => {
  const { state } = useContext(ContextMenuToggle)

  return state && <div className={styles.mask}></div>
}

export default Mask
