import { applyMiddleware,compose,createStore } from 'redux'
import rootReducer from '../redux/reducers/index'
//import reducer from './reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let finalCreateStore = compose(
	applyMiddleware(thunk,logger())	
	)(createStore)

export default function configureStore (initialState = { todos:[ ] ,user : {} }) {
	//return finalCreateStore(reducer,initialState)
	return finalCreateStore(rootReducer,initialState)
}