import { combineReducers } from 'redux'
import { socialReducer } from './social'

export const rootReducer = combineReducers({
  social: socialReducer
})
