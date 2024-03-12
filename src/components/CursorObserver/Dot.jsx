import useDelayedValue from '../../hooks/usePointerPosition/useDelayedValue.js'
import styles from './Dot.module.scss'

const Dot = ({ position, delay, opacity }) => {
  const coordinate = useDelayedValue(position, delay)

  return (
    <div className={styles.dot}>
      <div
        style={{
          position: 'fixed',
          backgroundColor: 'pink',
          zIndex: 1000,
          borderRadius: '50%',
          transform: `translate(${coordinate.x}px, ${coordinate.y}px)`,
          opacity,
          pointerEvents: 'none',
          left: '.3%',
          top: '.3%',
          width: '10px',
          height: '10px',
        }}
      />
    </div>
  )
}

export default Dot
