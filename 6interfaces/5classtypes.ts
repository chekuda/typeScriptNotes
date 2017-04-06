//Interfaces describe the public side of the class,
//This prohibits you from using them to check that a class 

interface IApp {
	journeyId: string;
	setId(journey: string);
}

class Panel implements IApp {
	journeyId: string;
	setId(journey: string){
		//do XMLHTTPrequest
		console.log(this.id);
	}
	constructor(public id: number) {
	}
}

const panel = new Panel(12345).setId('my-journeyId');

//Usable when you want to test other class which use this class
//but dont want to use the class itself because of the request