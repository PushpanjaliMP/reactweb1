import React, { Component} from 'react'
import actions from '../redux/actions'

class TodoInput extends Component {

	constructor(props,context){
		super(props,context)
		this.state = {
			inputText:''
		}
	}

	handleChange(event) {
		this.setState({
			inputText: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		//console.log('submit clicked')
		this.props.addTodo(this.state.inputText)//class="well"
	}

	render() {
		return (
				<div className="form-group">
				<label for="usr">User</label>
					<input 
						type="text" className="form-control"
						id="usr"
						placeholder="Type in your todo"
						value={this.state.inputText}
						onChange={this.handleChange.bind(this)}	/>
						<button className="btn btn-success"onClick={this.handleSubmit.bind(this)}>Submit</button>
				</div>
			)
	}
}

export default TodoInput