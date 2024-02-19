import ButtonLink from '../../../UI/ButtonLink/ButtonLink.jsx'
import styles from './FooterAddress.module.scss'

const FooterAddress = () => {
  return (
    <div className={styles.footerAddress}>
      <h2 className={styles.footerAddressTitle}>
        ONLY GOOD HAIR DAES AHEAD—AND 10% OFF YOUR FIRST ORDER
      </h2>
      <h3>Want to shop in person? Swing by our showroom.</h3>
      <ButtonLink
        target={'_blank'}
        className={styles.footerAddress}
        toLink={'https://maps.app.goo.gl/sajGAHTieNznkJPC7'}
      >
        M-F, 10am-2pm 5051 E Indigo St, Suite 105, Mesa, AZ 85205
      </ButtonLink>
    </div>
  )
}

export default FooterAddress
