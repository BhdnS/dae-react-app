import {SwiperSlide} from 'swiper/react'
import ButtonLink from '../../../UI/ButtonLink/ButtonLink.jsx'
import CardFollow from '../../../UI/CardFollow/CardFollow.jsx'
import Container from '../../../UI/Container/Container.jsx'
import SwiperElement from '../../../UI/SwiperElement/SwiperElement.jsx'
import styles from './Follow.module.scss'
import followData from './followData.js'

const Follow = () => {
  return (
    <div className={styles.follow}>
      <Container>
        <h2>
          <ButtonLink
            className={styles.followTitle}
            toLink={'https://www.instagram.com/daehair/'}
          >
            Follow Us @daehair
          </ButtonLink>
        </h2>
        <SwiperElement between={3} perView={6} perViewMobile={2}>
          {followData.map((v) => (
            <SwiperSlide key={v.id}>
              <CardFollow
                img={v.img}
                imgAlt={v.alt}
                logo={v.imgLogo}
                logoAlt={v.altLogo}
              />
            </SwiperSlide>
          ))}
        </SwiperElement>
      </Container>
    </div>
  )
}

export default Follow