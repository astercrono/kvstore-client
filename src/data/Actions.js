import ActionTypes from "./ActionTypes";
import AppDispatcher from "./AppDispatcher";

const Actions = {
	addKeyValue(keyvalue) {
		AppDispatcher.dispatch({
			type: ActionTypes.ADD_KEYVALUE,
			keyvalue: keyvalue
		});
	},

	startEditingNew() {
		AppDispatcher.dispatch({
			type: ActionTypes.START_EDITING_NEW
		});
	},

	deleteKeyValue(keyvalue) {
		AppDispatcher.dispatch({
			type: ActionTypes.DELETE_KEYVALUE,
			keyvalue: keyvalue
		});
	},

	refresh() {
		AppDispatcher.dispatch({
			type: ActionTypes.REFRESH
		});
	},

	saveKeyValue(keyvalue) {
		console.log("saving");
		AppDispatcher.dispatch({
			type: ActionTypes.SAVE_KEYVALUE,
			keyvalue: keyvalue
		});
	}
};

export default Actions;