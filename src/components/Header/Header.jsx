import styles from './Header.module.scss'
import HeaderBox from './HeaderBox/HeaderBox.jsx'
import HeaderTitle from './HeaderTitle/HeaderTitle.jsx'

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderTitle />
      <HeaderBox />
    </header>
  )
}

export default Header
