import { combineReducers } from 'redux'
import { showName, showIcon } from './nombre/show'

import user from './user'

export const reducers = combineReducers({
  showName,
  showIcon,
  user
})
