// /*******
// 	TYPESCRIPT
// ********/

//superClass
class Person {
	name: string;
	surname: string;
	constructor(){
		this.name;
		this.surname;
	}
	setfullName(name: string, surname: string){
		this.name = name;
		this.surname = surname;
	}
}

class Me extends Person { //give access to Person features
	constructor(){
		super() //The super keyword is used to call functions on an object's parent.
	}
	setfullName(name = 'jose', surname = 'checa'){
		super.setfullName(name,surname);
	}
	getName(){
		console.log('My name is '+ this.name + ' '+ this.surname)
	}
}

const me = new Me();

console.log(me instanceof Me); //true
console.log(me instanceof Person); //true

me.setfullName('jose','checa');
me.getName();  //my name is Jose

