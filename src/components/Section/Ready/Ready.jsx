import ButtonLink from '../../../UI/ButtonLink/ButtonLink.jsx'
import Container from '../../../UI/Container/Container.jsx'
import styles from './Ready.module.scss'

const Ready = () => {
  return (
    <div className={styles.ready}>
      <Container>
        <h2 className={styles.readyTitle}>Ready To Get Drenched?</h2>
        <h3 className={styles.readySubTitle}>Meet Monsoon Moisture Mask</h3>
        <ButtonLink toLink={'#'} className={styles.readyLink}>
          Shop Now
        </ButtonLink>
      </Container>
    </div>
  )
}

export default Ready
