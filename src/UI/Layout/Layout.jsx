import Mask from '../Mask/Mask.jsx'
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      {children}
      <Mask />
    </div>
  )
}

export default Layout
