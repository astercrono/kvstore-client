import React, {Component} from "react";

class KeyInput extends Component {
	constructor(props) {
		super(props);
		this.handleOnChange = this.handleOnChange.bind(this);
	}

	componentDidMount() {
		this.input.focus();
	}

	handleOnChange(event) {
		if (this.props.onValueChange) {
			this.props.onValueChange(event.target.value);
		}
	}

	render() {
		return (
			<input type="text" className="form-control" id="keyvalue-key" maxLength="48"
			       value={this.props.value} ref={(input) => this.input = input} onChange={this.handleOnChange} />
		);
	}
}

export default KeyInput;