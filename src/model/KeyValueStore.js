class KeyValueStore {
	// TODO - keep list sorted by key name.
	//        use binary search to locate.
	constructor() {
		this.keyvalues = [];
	}

	addKeyValues(keyvalues) {
		this.keyvalues.forEach((kv) => {
			this.set(kv);
		});
	}

	get(key) {
		let keyValue = undefined;

		this.keyvalues.every((kv) => {
			if (kv.key === key) {
				keyValue = kv;
				return false;
			}
			return true;
		});

		return keyValue;
	}

	exists(key) {
		if (this.get(key)) {
			return true;
		}
		return false;
	}

	add(kv) {
		if (this.exists(kv.key)) {
			return;
		}
		this.keyvalues.push(kv);
	}

	addAll(keyValues) {
		keyValues.forEach((kv) => {
			this.add(kv);
		});
	}

	getAll() {
		return this.keyvalues;
	}
}

export default KeyValueStore;