import Container from '../../UI/Container/Container.jsx'
import styles from './Footer.module.scss'
import FooterAddress from './FooterAddress/FooterAddress.jsx'
import FooterInfo from './FooterInfo/FooterInfo.jsx'
import FooterPolice from './FooterPolice/FooterPolice.jsx'
import { firstColumnData, secondColumnData } from './footerData.js'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerBox}>
          <div className={styles.footerInfo}>
            <FooterInfo title={'Sustainability'} data={firstColumnData} />
            <FooterInfo title={'Privacy Policy'} data={secondColumnData} />
          </div>
          <FooterAddress />
        </div>
        <FooterPolice />
      </Container>
    </footer>
  )
}

export default Footer
