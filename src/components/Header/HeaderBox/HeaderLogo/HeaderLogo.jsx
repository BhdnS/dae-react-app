import ButtonLink from '../../../../UI/ButtonLink/ButtonLink.jsx'
import logo from '../../../../assets/images/logo/logo.png'
import styles from './HeaderLogo.module.scss'

const HeaderLogo = () => {
  return (
    <h1>
      <ButtonLink toLink={'#'}>
        <img className={styles.logo} src={logo} alt='dae' />
      </ButtonLink>
    </h1>
  )
}

export default HeaderLogo
