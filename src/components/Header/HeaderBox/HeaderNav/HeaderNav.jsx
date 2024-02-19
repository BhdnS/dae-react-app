import { useCallback, useContext } from 'react'
import BurgerButton from '../../../../UI/BurgerButton/BurgerButton.jsx'
import ButtonClose from '../../../../UI/ButtonClose/ButtonClose.jsx'
import ButtonLink from '../../../../UI/ButtonLink/ButtonLink.jsx'
import ContextMenuToggle from '../../../../state/menu/ContextMenuToggle.js'
import styles from './HeaderNav.module.scss'
import navData from './navData.js'

const HeaderNav = () => {
  const { dispatch, state } = useContext(ContextMenuToggle)
  const boxStyle = `${styles.box} ${state ? styles.boxOpen : ''}`

  const handleViewMenu = useCallback(() => {
    dispatch({ type: 'TOGGLE_MENU' })
  }, [dispatch])

  const handleCloseMenu = () => {
    dispatch({ type: 'CLOSE_MENU' })
  }

  return (
    <>
      <nav className={boxStyle}>
        <ul className={styles.boxNav}>
          <ButtonClose
            className={styles.boxClose}
            handleClose={handleCloseMenu}
          />
          {navData.map((v) => (
            <li key={v.id}>
              <ButtonLink className={styles.boxLink} toLink={`#${v.id}`}>
                {v.title}
              </ButtonLink>
            </li>
          ))}
        </ul>
      </nav>
      <BurgerButton viewMenu={state} onClick={handleViewMenu} />
    </>
  )
}

export default HeaderNav
