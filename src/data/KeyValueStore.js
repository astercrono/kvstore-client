import Immutable from "immutable";
import {ReduceStore} from "flux/utils";
import ActionTypes from "./ActionTypes";
import AppDispatcher from "./AppDispatcher";
import IDSequence from "../model/IDSequence";
import KeyValue from "../model/KeyValue";

class KeyValueStore extends ReduceStore {
	constructor() {
		super(AppDispatcher);
	}

	getInitialState() {
		return Immutable.OrderedMap();
	}

	reduce(state, action) {
		switch (action.type) {
			case ActionTypes.REFRESH:
				return this._refresh(state, action);
			case ActionTypes.START_EDITING_NEW:
				return this._addEmptyKeyValue(state);
			case ActionTypes.DELETE_KEYVALUE:
				return this._deleteKeyValue(state, action);
			case ActionTypes.SAVE_KEYVALUE:
				return this._saveKeyValue(state, action);
			default:
				return state;
		}
	}

	_refresh(state, action) {
		return state.withMutations((state) => {
			IDSequence.reset();
			state.clear();

			action.keyvalues.forEach((kv) => {
				if (IDSequence.atLimit()) {
					return;
				}

				const id = IDSequence.increment();
				state.set(id, new KeyValue({
					id,
					key: kv.key,
					value: kv.value
				}));
			});
		});
	}

	_saveKeyValue(state, action) {
		const keyValue = action.keyvalue;
		return state.set(keyValue.id, new KeyValue({
			id: keyValue.id,
			key: keyValue.key,
			value: keyValue.value
		}));
	}

	_deleteKeyValue(state, action) {
		return state.delete(action.keyvalue.id);
	}

	_addEmptyKeyValue(state) {
		const id = IDSequence.increment();
		return state.set(id, new KeyValue({id}));
	}

	_addKeyValue(state, action) {
		if (IDSequence.atLimit()) {
			return state;
		}
		const id = IDSequence.increment();
		return state.set(id, new KeyValue({
			id,
			key: action.keyvalue.key,
			value: action.keyvalue.value
		}));
	}
}

export default new KeyValueStore();