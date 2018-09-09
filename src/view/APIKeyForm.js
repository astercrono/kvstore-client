import React, {Component} from "react";

class APIKeyForm extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<div className="form-group">
				<label htmlFor="apikey">API Key:</label>
				<input type="text" className="form-control" ref="APIKeyInput" id="apikey" value="" />
			</div>
		);
	}
}

export default APIKeyForm;