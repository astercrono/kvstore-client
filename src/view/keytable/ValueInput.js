import React, {Component} from "react";

class ValueInput extends Component {
	constructor(props) {
		super(props);
		this.handleOnChange = this.handleOnChange.bind(this);
	}

	handleOnChange(event) {
		if (this.props.onValueChange) {
			this.props.onValueChange(event.target.value);
		}
	}

	render() {
		return (
			<textarea type="text" className="form-control" ref="KeyTableRowValue" id="keyvalue-value" maxLength="512"
			          rows="5" value={this.props.value} onChange={this.handleOnChange}/>
		);
	}
}

export default ValueInput;