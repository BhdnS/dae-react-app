import usePointerPosition from '../../hooks/usePointerPosition/usePointerPosition.js'
import Dot from './Dot.jsx'
import dotConfigurations from './dotConfigurations.js'

const CursorObserver = () => {
  const position = usePointerPosition()

  return (
    <>
      {dotConfigurations.map((v) => (
        <Dot
          key={v.id}
          opacity={v.opacity}
          position={position}
          delay={v.delay}
        />
      ))}
    </>
  )
}

export default CursorObserver
