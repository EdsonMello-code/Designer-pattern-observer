const Observers = require('./Observer');

const observers = new Observers();

function soma(value) {
	console.log(value + value);
}

function mulplication(value) {
	console.log(value * value);
}

function devidir(value) {
	console.log(value / value);
}
 
observers.subscriber(soma);
observers.subscriber(mulplication);
observers.subscriber(devidir);


observers.notify(1);
observers.notify(20);
