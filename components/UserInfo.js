import React, { Component } from 'react'
//import actions from '../redux/actions'

class UserInfo extends Component {

handleNewId() {
	this.props.createNewUserId()
}

handleNewIdIfOdd() {
	this.props.createNewUserIdIfOdd()
}
handleNewIdAsync(){
	this.props.createNewUserIdAsync()
}

	render() {
		return (
				<li className="list-group-item">
				<div> username: {this.props.user.username}</div>
				<div> id: {this.props.user.id}</div>
				<button className="btn btn-primary" onClick={this.handleNewId.bind(this)}>Update random id</button>
				<button className="btn btn-primary"  onClick={this.handleNewIdIfOdd.bind(this)}>Update Odd Id</button>
				<button className="btn btn-primary" onClick={this.handleNewIdAsync.bind(this)}>Update Async</button>
				</li>
			)
	}
}

export default UserInfo