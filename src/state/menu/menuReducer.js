const initialState = false

const menuReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return !state
    case 'CLOSE_MENU':
      return false
    default:
      return state
  }
}

export { initialState, menuReducer }
