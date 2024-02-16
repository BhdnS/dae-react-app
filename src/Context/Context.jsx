import {useReducer} from 'react'
import {initialState, menuReducer} from '../state/menu/menuReducer.js'
import ContextMenuToggle from '../state/menu/ContextMenuToggle.js'

const Context = ({ children }) => {
  const [ state, dispatch ] = useReducer(menuReducer, initialState)
  return (
    <>
      <ContextMenuToggle.Provider value={{ state, dispatch }}>
        {children}
      </ContextMenuToggle.Provider>
    </>
  )
}

export default Context