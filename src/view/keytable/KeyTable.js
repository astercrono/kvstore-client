import React, {Component} from "react";
import KeyTableRow from "./KeyTableRow";
import "./KeyTable.css";

class KeyTable extends Component {
	renderRows() {
		let rows = this.props.keyValues.toArray().map((kv) => {
			return (
				<KeyTableRow value={kv} key={kv.id.toString()}/>
			);
		});
		return rows;
	}

	render() {
		return (
			<table className="KeyTable, table">
				<thead>
					<tr><th>Key</th><th>Value</th><th></th></tr>
				</thead>
				<tbody>
					{this.renderRows()}
				</tbody>
			</table>
		);
	}
}

export default KeyTable;