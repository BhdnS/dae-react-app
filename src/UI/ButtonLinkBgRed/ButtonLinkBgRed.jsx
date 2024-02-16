import styles from './ButtonLinkBgRed.module.scss'

const ButtonLinkBgRed = ({ className, children, toLink }) => {
  const buttonStyle = `${styles.buttonLink} ${className}`

  return (
    <>
      <a href={toLink} className={buttonStyle}>
        {children}
      </a>
    </>
  )
}

export default ButtonLinkBgRed
