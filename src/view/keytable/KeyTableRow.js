import React, {Component} from "react";
import "./KeyTableRow.css";
import ValueInput from "./ValueInput";
import KeyInput from "./KeyInput";
import Actions from "../../data/Actions";

class KeyTableRow extends Component {
	constructor(props) {
		super(props);

		let isModified = props.value.value === "";

		this.state = {
			isEditing: false,
			id: props.value.id,
			key: props.value.key,
			value: props.value.value,
			isModified: isModified,
			errorMessages: props.validateKeyValue()
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleSaveClick = this.handleSaveClick.bind(this);
		this.handleDeleteClick = this.handleDeleteClick.bind(this);
		this.onValueChange = this.onValueChange.bind(this);
		this.onKeyChange = this.onKeyChange.bind(this);
		this.handleKeyPresses = this.handleKeyPresses.bind(this);
	}

	componentDidMount() {
		document.addEventListener("keydown", this.handleKeyPresses, false);
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.handleKeyPresses, false);
	}

	handleKeyPresses(event) {
		if (event.keyCode === 27) {
			this._stopEdit();
		}
		else if (event.keyCode === 13 && !event.shiftKey) {
			this._stopEdit();
		}
	}

	handleClick(event) {
		this._startEdit();
	}

	handleSaveClick(event) {
		this._save();
	}

	handleDeleteClick(event) {
		Actions.deleteKeyValue(this.state);
	}

	onValueChange(newValue) {
		if (this._isModified(this.state.key, newValue)) {
			this.setState({
				value: newValue,
				isModified: true
			});
		}
		else {
			this.setState({
				value: newValue,
				isModified: false
			});
		}
	}

	onKeyChange(newKey) {
		if (this._isModified(newKey, this.state.value)) {
			this.setState({
				key: newKey,
				isModified: true
			});
		}
		else {
			this.setState({
				key: newKey,
				isModified: false
			});
		}
	}

	prerenderErrorMessages() {
		let renderedErrorMessages = undefined;

		if (this.state.errorMessages && this.state.errorMessages.length > 0) {
			renderedErrorMessages = this.state.errorMessages.map((msg) => {
				return (
					<div className="KeyTableRow-ErrorMessage" key={msg}>{msg}</div>
				);
			});
		}

		return renderedErrorMessages;
	}

	renderKeyCell() {
		let renderedErrorMessages = this.prerenderErrorMessages();

		return (
			<td className="KeyTableRow-Key" onClick={this.handleClick}>
				{!this.state.isEditing && this.state.key !== "" && this.state.key}
				{!this.state.isEditing && this.state.key === "" && "--"}
				{this.state.isEditing && <KeyInput onValueChange={this.onKeyChange} value={this.state.key}/>}
				{(renderedErrorMessages && renderedErrorMessages !== "") ? renderedErrorMessages : ""}
			</td>
		);
	}

	renderValueCell() {
		return (
			<td className="KeyTableRow-Value" onClick={this.handleClick}>
				{!this.state.isEditing && this.state.value !== "" &&
				<span>&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;</span>}
				{!this.state.isEditing && this.state.value === "" &&
				<span>--</span>}
				{this.state.isEditing && <ValueInput onValueChange={this.onValueChange} value={this.state.value}/>}
			</td>
		);
	}

	renderIconCell() {
		return (
			<td className={(this.state.isModified || this.state.isEditing) ? "KeyTableRow-Icon2" : "KeyTableRow-Icon"}>
				{(this.state.isModified || this.state.isEditing) &&
				<span className="KeyTableRow-Save glyphicon glyphicon-floppy-disk" aria-hidden="true"
				      onClick={this.handleSaveClick}></span>}
				<span className="KeyTableRow-Trash glyphicon glyphicon-trash" aria-hidden="true"
				      onClick={this.handleDeleteClick}></span>
			</td>);
	}

	render() {
		let additionalClass = "";
		if (this.state.isModified) {
			additionalClass = " KeyTableRow-New";
		}

		return (
			<tr className={"KeyTableRow" + additionalClass} key={this.state.id}>
				{this.renderKeyCell()}
				{this.renderValueCell()}
				{this.renderIconCell()}
			</tr>
		);
	}

	_save() {
		let errorMessages = this.props.validateKeyValue(this.state.id, this.state.key, this.state.value);
		let hasErrors = (errorMessages && errorMessages.length > 0);

		this.setState({
			isEditing: false,
			isModified: hasErrors,
			errorMessages: errorMessages
		}, () => {
			if (!this.state.errorMessages || this.state.errorMessages.length === 0) {
				Actions.saveKeyValue({
					id: this.state.id,
					key: this.state.key,
					value: this.state.value
				});
			}
		});
	}

	_startEdit() {
		this.setState({isEditing: true});
	}

	_stopEdit() {
		let newErrors = undefined;

		if (this.props.validateKeyValue) {
			newErrors = this.props.validateKeyValue(this.state.id, this.state.key, this.state.value);
		}

		this.setState({
			isEditing: false,
			errorMessages: newErrors
		});
	}

	_isModified(key, value) {
		return !(key === this.props.value.key && value === this.props.value.value);
	}
}

export default KeyTableRow;