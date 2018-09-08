import React, {Component} from 'react';
import APIKeyForm from "./APIKeyForm";
import KeyTable from "./keytable/KeyTable";
import "./App.css";
import AddKeyValueButton from "./AddKeyValueButton";
import RefreshKeyValueButton from "./RefreshKeyValueButton";
import KeyValue from "./model/KeyValue";
import KeyValueStore from "./model/KeyValueStore";

class App extends Component {
	constructor(props) {
		super(props);
		this.title = "KVStore";

		const store = new KeyValueStore();
		store.addAll([new KeyValue("Key1", "abcd"), new KeyValue("Key2", "efgh"), new KeyValue("Key3", "ijkl")]);
		this.state = {
			store: store
		};
	}

	render() {
		return (
			<div className="App, container">
				<div className="row">
					<div className="col-sm-12">
						<h1><img src='key.png' width="48" height="48" alt=""/><span className="AppTitle">{this.title}</span>
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
						<KeyTable store={this.state.store}/>
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

export default App;
