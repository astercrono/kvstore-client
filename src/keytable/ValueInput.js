import React, {Component} from "react";

class ValueInput extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<textarea type="text" className="form-control" ref="KeyTableRowValue" id="keyvalue-value" maxLength="512"
			          rows="5" defaultValue="" />
		);
	}
}

export default ValueInput;