
/*******
	ES5
********/
function Person(name){
	this.name = name;
}
Person.prototype.getName = function(){
	return "My name is, " + this.name;
}
const person = new Person("Jose").getName(); //"My name is, Jose"

/*******
	ES6
********/
class Person{
	constructor(name){
		this.name = name;
	}
	getName() {
        return "My name is, " + this.name;
  }
}

const person = new Person("Jose").getName(); //"My name is, Jose"

