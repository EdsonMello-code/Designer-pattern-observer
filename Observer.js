class Observer {
	observers = [];
	
	subscriber(fn) {
		this.observers.push(fn);

	}

	unsubscriber() {
		this.observers.pop();
	}

	notify(data) {
		this.observers.forEach(fn => fn(data));
	}
}

module.exports = Observer;