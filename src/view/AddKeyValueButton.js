import React, {Component} from "react";
import Actions from "../data/Actions";

class AddKeyValueButton extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		Actions.startEditingNew();
	}

	render() {
		return (
			<button type="button" className="btn btn-success" onClick={this.handleClick}>Add Key-Value</button>
		);
	}
}

export default AddKeyValueButton;