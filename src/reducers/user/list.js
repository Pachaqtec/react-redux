import { combineReducers } from 'redux'
import {
  USER_LIST_ERROR,
  USER_LIST_LOADING,
  USER_LIST_SUCCESS,
  USER_LIST_RESET
} from 'actions/user/list'

const error = (state = null, action) => {
  switch (action.type) {
    case USER_LIST_ERROR:
      return action.error
    case USER_LIST_RESET:
      return null
    default:
      return state
  }
}

const loading = (state = false, action) => {
  switch (action.type) {
    case USER_LIST_LOADING:
      return action.loading
    case USER_LIST_RESET:
      return false
    default:
      return state
  }
}

const data = (state = [], action) => {
  switch (action.type) {
    case USER_LIST_SUCCESS:
      return action.data
    case USER_LIST_RESET:
      return []
    default:
      return state
  }
}

export default combineReducers({
  error, loading, data
})

