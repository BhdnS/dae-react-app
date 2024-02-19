import 'swiper/css/bundle'
import { Autoplay } from 'swiper/modules'
import { Swiper } from 'swiper/react'

const SwiperElement = ({
  children,
  perView,
  perViewTablet,
  perViewMobile,
  between,
  breakpointTablet,
  breakpointMobile,
}) => {
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
        [breakpointMobile]: {
          slidesPerView: perViewTablet,
        },
        [breakpointTablet]: {
          slidesPerView: perView,
        },
      }}
    >
      {children}
    </Swiper>
  )
}

export default SwiperElement
