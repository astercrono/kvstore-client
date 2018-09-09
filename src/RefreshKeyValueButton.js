import React, {Component} from "react";
import Actions from "./data/Actions";

class RefreshKeyValueButton extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		Actions.refresh();
	}

	render() {
		return (
			<button type="button" className="btn btn-info" onClick={this.handleClick}>Refresh</button>
		);
	}
}

export default RefreshKeyValueButton;