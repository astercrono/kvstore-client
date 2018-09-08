import React, {Component} from "react";
import KeyTableRow from "./KeyTableRow";
import "./KeyTable.css";

class KeyTable extends Component {
	constructor(props) {
		super(props);
	}

	renderRows() {
		let rows = this.props.store.getAll().map((k) =>
			<KeyTableRow value={k} key={k.key.toString()}/>
		);
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