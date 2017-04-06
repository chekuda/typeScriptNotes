//This is used to give more security when change any value of a property within an instance
//Need compiler ES6

let journeyId = '000000';

class App {
	constructor(public _appId: string){}
	get appId(){
		return this._appId;
	}
	set appId(newAppId: string){
		if(journeyId === '000000'){
			this._appId = newAppId;
		}
	}
}

const app = new App('111111');
console.log(`Old App Id: ${app.appId}`);
app.appId = '123456';
console.log(`New App Id: ${app.appId}`);

