import React, {Component} from 'react';
import APIKeyForm from "./APIKeyForm";
import KeyTableView from "./keytable/KeyTable";
import "./AppView.css";
import AddKeyValueButton from "./AddKeyValueButton";
import RefreshKeyValueButton from "../RefreshKeyValueButton";

class AppView extends Component {
	render() {
		return (
			<div className="App, container">
				<div className="row">
					<div className="col-sm-12">
						<h1><img src='key.png' width="48" height="48" alt=""/><span
							className="AppTitle">KVStore</span>
						</h1>
						<p className="lead">A simple encrypted key-value store.</p>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<APIKeyForm value=""/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<AddKeyValueButton/> <RefreshKeyValueButton/>
						<KeyTableView keyValues={this.props.keyValues}/>
					</div>
				</div>
				<div className="row">
					<div className="col=sm-12">
					</div>
				</div>
			</div>
		);
	}
}

export default AppView;
