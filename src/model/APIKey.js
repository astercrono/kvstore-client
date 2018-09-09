import Cookies from "js-cookie";

class APIKey {
	constructor() {
		this.key = "";

		const existingKey = Cookies.get("APIKey");
		if (existingKey) {
			this.key = existingKey;
		}
	}

	get() {
		return this.key;
	}

	set(newKey) {
		this.key = newKey;
		Cookies.set("APIKey", newKey);
	}
}
export default new APIKey();