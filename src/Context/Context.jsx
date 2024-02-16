import { useReducer } from 'react'
import ContextMenuToggle from '../state/menu/ContextMenuToggle.js'
import { initialState, menuReducer } from '../state/menu/menuReducer.js'

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(menuReducer, initialState)
  return (
    <>
      <ContextMenuToggle.Provider value={{ state, dispatch }}>
        {children}
      </ContextMenuToggle.Provider>
    </>
  )
}

export default Context
