/* eslint-disable indent */
import React, {Component} from "react";
import KeyTableRow from "./KeyTableRow";
import "./KeyTable.css";

const KEY_REQUIRED_MSG = "Key Required";
const VALUE_REQUIRED_MSG = "Value Required";
const KEY_ALREADY_EXISTS_MSG = "Key Already Exists";

class KeyTable extends Component {
	constructor(props) {
		super(props);
		this.validateKeyValue = this.validateKeyValue.bind(this);
	}

	renderRows() {
		let rows = this.props.keyValues.toArray().map((kv) => {
			return (
				<KeyTableRow value={kv} key={kv.id.toString()} validateKeyValue={this.validateKeyValue}/>
			);
		});
		return rows;
	}

	validateKeyValue(id, key, value) {
		let messages = [];

		if (!key || key === "") {
			messages.push(KEY_REQUIRED_MSG);
		}

		if (!value || value === "") {
			messages.push(VALUE_REQUIRED_MSG);
		}

		if (messages.length > 0) {
			return messages;
		}

		const keyValues = this.props.keyValues.toArray();
		const match = keyValues.find((kv) => {
			return (kv.id !== id && kv.key === key);
		});

		if (match) {
			messages.push(KEY_ALREADY_EXISTS_MSG);
		}

		if (messages.length > 0) {
			return messages;
		}

		return undefined;
	}

	render() {
		return (
			<table className="KeyTable, table">
				<thead>
				<tr>
					<th>Key</th>
					<th>Value</th>
					<th></th>
				</tr>
				</thead>
				<tbody>
				{this.renderRows()}
				</tbody>
			</table>
		);
	}
}

export default KeyTable;