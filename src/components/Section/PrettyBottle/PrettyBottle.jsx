import { SwiperSlide } from 'swiper/react'
import Card from '../../../UI/Card/Card.jsx'
import Container from '../../../UI/Container/Container.jsx'
import SwiperElement from '../../../UI/SwiperElement/SwiperElement.jsx'
import styles from './PrettyBottle.module.scss'
import prettyBottleData from './prettyBottleData.js'

const PrettyBottle = () => {
  return (
    <div className={styles.prettyBottle} id='2'>
      <Container>
        <div className={styles.prettyBottleBox}>
          <h2 className={styles.prettyBottleTitle}>Pick a Pretty Bottle</h2>
          <SwiperElement
            perView={3}
            perViewTablet={2}
            perViewMobile={1}
            between={150}
            breakpointTablet={950}
            breakpointMobile={700}
          >
            {prettyBottleData.map((v) => (
              <SwiperSlide key={v.id}>
                <Card
                  title={v.title}
                  imageAlt={v.alt}
                  price={v.price}
                  image={v.src}
                />
              </SwiperSlide>
            ))}
          </SwiperElement>
        </div>
      </Container>
    </div>
  )
}

export default PrettyBottle
