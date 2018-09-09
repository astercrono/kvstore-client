/* eslint-disable indent */
import React, {Component} from "react";
import KeyTableRow from "./KeyTableRow";
import "./KeyTable.css";

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
			messages.push("Key required");
		}

		if (!value || value === "") {
			messages.push("Value Required");
		}

		if (messages.length > 0) {
			return messages;
		}

		const keyValues = this.props.keyValues.toArray();
		const match = keyValues.find((kv) => {
			return (kv.id !== id && kv.key == key);
		});

		if (match) {
			messages.push("Key Already Exists");
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