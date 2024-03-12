import { memo } from 'react'
import styles from './Card.module.scss'

const Card = memo(({ image, imageAlt, title, price }) => {
  return (
    <a href={'#'} className={styles.card}>
      <img
        className={styles.cardImg}
        src={image}
        alt={imageAlt}
        loading={'lazy'}
      />
      <div className='swiper-lazy-preloader swiper-lazy-preloader-black'></div>
      <div className={styles.cardBox}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <h4 className={styles.cardPrice}>{price}</h4>
      </div>
    </a>
  )
})

export default Card
