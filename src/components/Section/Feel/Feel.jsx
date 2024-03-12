import ButtonLink from '../../../UI/ButtonLink/ButtonLink.jsx'
import styles from './Feel.module.scss'

const Feel = () => {
  return (
    <section className={styles.feel} id='4'>
      <div className={styles.feelBox}>
        <h2 className={styles.feelTitle}>
          Feel the warmth of the desert wherever you are.
        </h2>
        <ButtonLink className={styles.feelBtn} toLink={'#'}>
          Shop Sets
        </ButtonLink>
      </div>
    </section>
  )
}

export default Feel
