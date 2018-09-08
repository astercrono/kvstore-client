import React, {Component} from "react";
import "./KeyTableRow.css";
import ValueInput from "./ValueInput";
import KeyInput from "./KeyInput";

class KeyTableRow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleSaveClick = this.handleSaveClick.bind(this);
		this.handleDeleteClick = this.handleDeleteClick.bind(this);
	}

	handleClick(event) {
		this.setState({isEditing: true});
	}

	handleSaveClick(event) {
		this.setState({isEditing: false});
	}

	handleDeleteClick(event) {
		alert("Deleting");
	}

	renderKeyCell(key) {
		return (
			<td className="KeyTableRow-Key" onClick={this.handleClick} >
				{!this.state.isEditing && key}
				{this.state.isEditing && <KeyInput/>}
			</td>
		);
	}

	renderValueCell(value) {
		return (<td className="KeyTableRow-Value" onClick={this.handleClick}>
			{!this.state.isEditing && value}
			{this.state.isEditing && <ValueInput />}
		</td>);
	}

	renderIconCell() {
		return (<td className="KeyTableRow-Icon">
			{this.state.isEditing && <span className="KeyTableRow-Save glyphicon glyphicon-floppy-disk" aria-hidden="true" onClick={this.handleSaveClick}></span>}
			{!this.state.isEditing && <span className="KeyTableRow-Trash glyphicon glyphicon-trash" aria-hidden="true" onClick={this.handleDeleteClick}></span>}
		</td>);
	}

	render() {
		return (
			<tr className="KeyTableRow">
				{this.renderKeyCell(this.props.value.key)}
				{this.renderValueCell(this.props.value.value)}
				{this.renderIconCell()}
			</tr>
		);
	}
}

export default KeyTableRow;