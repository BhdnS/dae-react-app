import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const useScrollAnimation = (config) => {
  const ref = useRef()

  useGSAP(() => {
    gsap.from(ref.current, {
      ...config.animation,
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        end: '+=200',
        scrub: 5,
      },
    })
  })

  return ref
}

export default useScrollAnimation
