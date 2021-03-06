//To describe a function type with an interface,
//we use a call signature.

interface IGetTimesAppFire {
	(appName: string, sessionId: string, numberFires: number): number;
}

let getTimesAppFire: IGetTimesAppFire;

//Function parameters are checked one at a time, 
//with the type in each corresponding parameter position checked against each other
getTimesAppFire = function(name, session, numberFires){
	let n = numberFires;
	return n;// The return should match with the type return
}

