"use strict";

var curFib = 0;

// TODO
self.postMessage('Hello from the web worker');
self.onMessage = onMessage;

// **********************************

function onMessage () {

}

function fib(n) {
	if (n < 2) {
		return n;
	}
	return fib(n-1) + fib(n-2);
}
