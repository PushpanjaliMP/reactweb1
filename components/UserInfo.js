import React, { Component } from 'react'
import actions from '../redux/actions'

class UserInfo extends Component {

handleNewId() {
	this.props.createNewUserId()
}

	render() {
		return (
				<li>
				<div> username: {this.props.user.username}</div>
				<div> id: {this.props.user.id}</div>
				<button onClick={this.handleNewId.bind(this)}>Update random id</button>
				</li>
			)
	}
}

export default UserInfo