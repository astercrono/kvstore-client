import axios from "axios";
import ActionTypes from "./ActionTypes";
import AppDispatcher from "./AppDispatcher";
import APIKey from "../model/APIKey";

const Actions = {
	startEditingNew() {
		AppDispatcher.dispatch({
			type: ActionTypes.START_EDITING_NEW
		});
	},

	deleteKeyValue(keyvalue) {
		axios({
			method: "DELETE",
			url: "/kvstore/value",
			headers: {
				"Authorization": "Bearer " + APIKey.get()
			},
			data: {
				key: keyvalue.key
			}
		}).then((response) => {
			AppDispatcher.dispatch({
				type: ActionTypes.DELETE_KEYVALUE,
				keyvalue: keyvalue
			});
		}).catch((error) => {
			alert("Invalid request.");
		});
	},

	refresh() {
		axios({
			method: "GET",
			url: "/kvstore/all",
			headers: {
				"Authorization": "Bearer " + APIKey.get()
			}
		}).then((response) => {
			AppDispatcher.dispatch({
				type: ActionTypes.REFRESH,
				keyvalues: response.data.data
			});
		}).catch((error) => {
			alert("Invalid request.");
		});
	},

	saveKeyValue(keyvalue) {
		axios({
			method: "PUT",
			url: "/kvstore/value",
			data: {
				key: keyvalue.key,
				value: keyvalue.value
			},
			headers: {
				"Authorization": "Bearer " + APIKey.get()
			}
		}).then((response) => {
			AppDispatcher.dispatch({
				type: ActionTypes.SAVE_KEYVALUE,
				keyvalue: keyvalue
			});
		}).catch((error) => {
			alert("Invalid request.");
		});
	}
};

export default Actions;