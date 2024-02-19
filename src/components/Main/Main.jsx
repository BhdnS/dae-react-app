import ButtonLinkBgRed from '../../UI/ButtonLinkBgRed/ButtonLinkBgRed.jsx'
import main from '../../assets/images/main/main.png'
import styles from './Main.module.scss'

const Main = () => {
  return (
    <div className={styles.main} id='1'>
      <img className={styles.mainImg} src={main} alt='main' />
      <ButtonLinkBgRed toLink={'#'} className={styles.mainBtn}>
        Shop now
      </ButtonLinkBgRed>
    </div>
  )
}

export default Main
