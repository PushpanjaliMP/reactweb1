import  React,{ Component} from 'react'

class TextPrint extends Component {


handleClick(){
	this.props.deleteLetter()

}
	render() {
		return (
			<div>
			Displayig from parent : {this.props.text}
			<button onClick={this.handleClick.bind(this)}>Delete One letter</button>
			</div>
		)
	}
}

export default TextPrint