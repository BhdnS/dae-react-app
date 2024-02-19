import ButtonLink from '../../../UI/ButtonLink/ButtonLink.jsx'
import feel from '../../../assets/images/feel/feel.png'
import styles from './Feel.module.scss'

const Feel = () => {
  return (
    <div className={styles.feel} id='4'>
      <img
        className={styles.feelImg}
        src={feel}
        alt='Feel the warmth of the desert wherever you are.'
      />
      <div className={styles.feelBox}>
        <h2 className={styles.feelTitle}>
          Feel the warmth of the desert wherever you are.
        </h2>
        <ButtonLink className={styles.feelBtn} toLink={'#'}>
          Shop Sets
        </ButtonLink>
      </div>
    </div>
  )
}

export default Feel
