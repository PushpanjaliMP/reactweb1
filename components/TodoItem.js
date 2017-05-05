import React, { Component } from 'react'
import actions from '../redux/actions'

class TodoItem extends Component {

	handleComplete() {
		this.props.actions.completeTodo(this.props.todo.id)
	}

	handleDelete() {
		this.props.actions.deleteTodo(this.props.todo.id)
	}

	render() {
		return (
				<li className="list-group-item">
				<div>{this.props.todo.text}</div>
				<button className="btn btn-primary" onClick={this.handleComplete.bind(this)}>Mark as Completed</button>
				<button className="btn btn-primary" onClick={this.handleDelete.bind(this)}>Delete Todo</button>
				</li>
			)
	}
}

export default TodoItem