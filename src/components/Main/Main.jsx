import ButtonLinkBgRed from '../../UI/ButtonLinkBgRed/ButtonLinkBgRed.jsx'
import styles from './Main.module.scss'

const Main = () => {
  return (
    <main className={styles.main} id='1'>
      <ButtonLinkBgRed toLink={'#'} className={styles.mainBtn}>
        Shop now
      </ButtonLinkBgRed>
    </main>
  )
}

export default Main
