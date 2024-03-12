import { memo } from 'react'
import styles from './ButtonLink.module.scss'

const ButtonLink = memo(({ children, toLink, className, target }) => {
  const stylesButton = `${className} ${styles.btn}`

  return (
    <a target={target} className={stylesButton} href={toLink}>
      {children}
    </a>
  )
})

export default ButtonLink
