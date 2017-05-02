import  React,{ Component} from 'react'
import TextPrint from './TextPrint'

class TextDisplay extends Component {

	constructor(props,context) {
		super(props,context)
		this.state = {
			inputText :"input text"
		}
	}

	deleteLetter(){
		this.setState({
			inputText:this.state.inputText.substring(0,this.state.inputText.length -1)
		})
	}

	handleChange(event) {
		this.setState({
			inputText : event.target.value
		})
		//console.log(event.target.value)
	}

	render() {
		return (
			<div>
			<input 
			type="text" 
			placeholder="This is going to be text"
			value={this.state.inputText}
			onChange={this.handleChange.bind(this)}/>
			<TextPrint text={this.state.inputText} deleteLetter={this.deleteLetter.bind(this)} />
			</div>
		)
	}
}

export default TextDisplay