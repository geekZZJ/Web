function learn(sm){
	console.log(sm);
}

function we(callback,sm){
	sm += ' is cool';
	callback(sm);
}

we(learn,'Nodejs')