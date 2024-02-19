import ButtonLink from '../../../UI/ButtonLink/ButtonLink.jsx'
import styles from './FooterPolise.module.scss'

const FooterPolice = () => {
  return (
    <div className={styles.footerPolice}>
      <h3>© 2021</h3>
      <h2 className={styles.footerPoliceTitle}>
        <ButtonLink>Dae.</ButtonLink>
      </h2>
      <p>All rights reserved.</p>
    </div>
  )
}

export default FooterPolice
