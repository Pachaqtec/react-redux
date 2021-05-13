import { 
  AUTH_USER_ERROR,
  AUTH_USER_LOADING,
  AUTH_USER_SUCCESS
} from 'actions/auth/auth'
import { combineReducers } from 'redux'

const auth = (state = {}, action) => {
  switch (action.type) {
    case AUTH_USER_SUCCESS:
      return action.data
    default:
      return state
  }
}

const loading = (state = false, action) => {
  switch (action.type) {
    case AUTH_USER_LOADING:
      return action.loading
    default:
      return state
  }
}

const error = (state = null, action) => {
  switch (action.type) {
    case AUTH_USER_ERROR:
      return action.error
    default:
      return state
  }
}

export default combineReducers({
  auth, loading, error
})
