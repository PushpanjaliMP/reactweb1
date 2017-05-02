import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

let initialState = {
	todos: [{
		id:0,
		completed:false,
		text:'Initial to do for demo puposes'
	}],
	user : {
		username: 'Kurt',
		id: 13
	}
}

let store = configureStore(initialState)
//configure and create our store
//var store = createStore(reducer,initialstate)

render(
	//define the encompossing component
	//dom element we want to mount into 
<Provider store = {store}>
<App />
</Provider>,
document.getElementById('app')
)