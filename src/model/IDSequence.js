class IDSequence {
	constructor() {
		this.sequence = 1;
	}

	increment() {
		this.sequence = this.sequence + 1;
		return "id-" + String(this.sequence);
	}

	atLimit() {
		return this.sequence >= 100000;
	}

	reset() {
		this.sequence = 1;
	}
}

export default new IDSequence();