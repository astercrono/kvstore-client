import React, {Component} from "react";
import APIKey from "../model/APIKey";

class APIKeyForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			key: APIKey.get()
		};
		this.onValueChange = this.onValueChange.bind(this);
	}

	onValueChange(event) {
		const newKey = event.target.value;

		this.setState({
			key: newKey
		}, () => {
			APIKey.set(newKey);
		});
	}

	render() {
		return (
			<div className="form-group">
				<label htmlFor="apikey">API Key:</label>
				<input type="text" className="form-control" ref="APIKeyInput" id="apikey" value={this.state.key} onChange={this.onValueChange}/>
			</div>
		);
	}
}

export default APIKeyForm;