import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import cakeReducer from './cake/cakeReducer'
import rootReducer from './rootReducer'

// export const store = createStore(cakeReducer)
export const store = createStore(rootReducer, applyMiddleware(logger))
