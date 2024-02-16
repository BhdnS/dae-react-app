import styles from './Layout.module.scss'
import Mask from '../Mask/Mask.jsx'

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      {children}
      <Mask/>
    </div>
  )
}

export default Layout
