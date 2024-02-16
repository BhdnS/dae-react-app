import styles from './HeaderTitle.module.scss'

const HeaderTitle = () => {
  return (
    <div className={styles.headerBox}>
      <h2 className={styles.headerTitle}>
        Free Shipping on US Orders Over $60
      </h2>
    </div>
  )
}

export default HeaderTitle
