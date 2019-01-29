import { combineReducers } from 'redux'
import { socialReducer } from './social'
import { viewReducer } from './view'

export const rootReducer = combineReducers({
  social: socialReducer,
  view: viewReducer
})
