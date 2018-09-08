import React, {Component} from "react";

class KeyInput extends Component {
	componentDidMount() {
		this.input.focus();
	}

	render() {
		return (
			<input type="text" className="form-control" ref="KeyTableRowKey" id="keyvalue-key" maxLength="48"
			       defaultValue=""ref={(input) => this.input = input }/>
		);
	}
}

export default KeyInput;