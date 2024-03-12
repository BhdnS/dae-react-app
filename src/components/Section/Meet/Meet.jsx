import ButtonLink from '../../../UI/ButtonLink/ButtonLink.jsx'
import meet from '../../../assets/images/meet/meet.png'
import useScrollAnimation from '../../../hooks/useScrollAnimation/useScrollAnimation.js'
import styles from './Meet.module.scss'

const Meet = () => {
  const refImg = useScrollAnimation({
    animation: { opacity: 0, x: '-100%' },
  })

  const refText = useScrollAnimation({
    animation: { opacity: 0, x: '100%' },
  })

  return (
    <section id='3' className={styles.meet}>
      <img ref={refImg} className={styles.meetImg} src={meet} alt='Meet Dae' />
      <div ref={refText} className={styles.meetBox}>
        <h2 className={styles.meetTitle}>Meet Dae</h2>
        <p className={styles.meetText}>
          We’re a haircare line based in sunny Arizona. Our products are made up
          of the many things that make our home special, including the scent of
          orange blossoms in the air, colors of majestic sunsets and nourishing
          ingredients derived from desert botanicals. We believe haircare
          doesn’t have to be complicated and aimed to make a line that is simple
          and effective. We hope that dae plays a special role in your everyday
          hair routine from sunrise to sunset and allows you to feel the warmth
          of the desert wherever you are.
        </p>
        <ButtonLink className={styles.meetBtn} toLink={'#'}>
          Read More
        </ButtonLink>
      </div>
    </section>
  )
}

export default Meet
