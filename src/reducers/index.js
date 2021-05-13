import { combineReducers } from 'redux'
import { showName, showIcon } from './nombre/show'

import user from './user'
import auth from './auth'

export const reducers = combineReducers({
  showName,
  showIcon,
  user,
  auth
})
