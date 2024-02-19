import Container from '../../../UI/Container/Container.jsx'
import styles from './HeaderBox.module.scss'
import HeaderInfo from './HeaderInfo/HeaderInfo.jsx'
import HeaderLogo from './HeaderLogo/HeaderLogo.jsx'
import HeaderNav from './HeaderNav/HeaderNav.jsx'

const HeaderBox = () => {
  return (
    <div className={styles.box}>
      <Container>
        <div className={styles.flex}>
          <HeaderNav />
          <HeaderLogo />
          <HeaderInfo />
        </div>
      </Container>
    </div>
  )
}

export default HeaderBox
