import React, {Component} from "react";
import {Container} from "flux/utils";
import KeyValueStore from "../data/KeyValueStore";
import AppView from "../view/AppView";

class AppContainer extends Component {
	static getStores() {
		return [KeyValueStore];
	}

	static calculateState(previousState) {
		return {
			keyValues: KeyValueStore.getState()
		};
	}

	render() {
		return (
			<AppView keyValues={this.state.keyValues}/>
		);
	}
}

export default Container.create(AppContainer);
