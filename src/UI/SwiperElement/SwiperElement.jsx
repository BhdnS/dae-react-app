import 'swiper/css/bundle'
import {Autoplay} from 'swiper/modules'
import {Swiper} from 'swiper/react'

const SwiperElement = ({ children, perView, perViewMobile, between }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={between}
      slidesPerView={perViewMobile}
      loop={true}
      autoplay={{
        delay: 3000,
      }}
      breakpoints={{
        770: {
          slidesPerView: perView,
        },
      }}
    >
      {children}
    </Swiper>
  )
}

export default SwiperElement
