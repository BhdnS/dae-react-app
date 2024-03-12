import { memo } from 'react'
import styles from './CardFollow.module.scss'

const CardFollow = memo(({ img, imgAlt, logo, logoAlt }) => {
  return (
    <div className={styles.cardFollow}>
      <img
        className={styles.cardFollowImg}
        src={img}
        alt={imgAlt}
        loading={'lazy'}
      />
      <img
        className={styles.cardFollowLogo}
        src={logo}
        alt={logoAlt}
        loading={'lazy'}
      />
      <div className='swiper-lazy-preloader swiper-lazy-preloader-black'></div>
    </div>
  )
})

export default CardFollow
