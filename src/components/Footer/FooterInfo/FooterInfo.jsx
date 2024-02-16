import ButtonLink from '../../../UI/ButtonLink/ButtonLink.jsx'
import styles from './FooterInfo.module.scss'

const FooterInfo = ({ title, data }) => {
  return (
    <div className={styles.info}>
      <h2 className={styles.infoText}>{title}</h2>
      <ul className={styles.infoList}>
        {data.map((v) => (
          <li key={v.id}>
            <ButtonLink toLink={v.href} className={styles.infoText}>
              {v.title}
            </ButtonLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterInfo
