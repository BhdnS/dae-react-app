import styles from './Mask.module.scss'
import {useContext} from 'react'
import ContextMenuToggle from '../../state/menu/ContextMenuToggle.js'

const Mask = () => {
  const { state } = useContext(ContextMenuToggle)
  
  return state && <div className={styles.mask}></div>
}

export default Mask