import React, { Component} from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import UserInfo from './UserInfo'

class App extends Component {

	render() {
		return (
			<div className="jumbotron">
			<div className="container">
			<h1>Todo List</h1>
			<UserInfo user={this.props.user} createNewUserId={this.props.actions.createNewUserId} createNewUserIdIfOdd={this.props.actions.createNewUserIdIfOdd}  createNewUserIdAsync={this.props.actions.createNewUserIdAsync}/>
			<TodoInput  addTodo ={this.props.actions.addTodo}/>
			<TodoList actions={this.props.actions} todos={this.props.todos}/>
			</div>
			</div>
			)
	}
}

function mapStateToProps(state){
	return state
}
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions,dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App)