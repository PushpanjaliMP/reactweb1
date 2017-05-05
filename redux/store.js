import { applyMiddleware,compose,createStore } from 'redux'
import rootReducer from '../redux/reducers/index'
//import reducer from './reducer'
//import logger  from 'redux-logger'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

const logger = createLogger({});

let finalCreateStore = compose(
	applyMiddleware(logger,thunk))(createStore)

export default function configureStore (initialState = { todos:[ ] ,user : {} } ) {
	//return finalCreateStore(reducer,initialState)
	return finalCreateStore(rootReducer,initialState)
	//return createStore(rootReducer,initialState)
}	