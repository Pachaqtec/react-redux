import { CHANGE_NAME, SHOW_ICON } from 'actions/nombre/show'

export const showName = (state = '', action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return action.payload
    default:
      return state;
  }
}

export const showIcon = (state = false, action) => {
  switch (action.type) {
    case SHOW_ICON:
      return !state
    default:
      return state;
  }
}

