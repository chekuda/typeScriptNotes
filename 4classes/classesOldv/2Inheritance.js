/*******
	ES5
********/

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

//superClass
function Person() {
  this.name;
  this.surname;
}
Person.prototype.setfullName= function(name, surname){
	this.name = name;
	this.surname = surname;
}

//subClass
function Me(){
	Person.call(this); // call super constructor.
}

// subclass extends superclass
Me.prototype = Object.create(Person.prototype);
Me.prototype.getName = function(){
	console.log('my name is '+ this.name + ' '+ this.surname);
}

var me = new Me();

console.log(me instanceof Me);     //true
console.log(me instanceof Person); //true

me.setfullName('jose','checa');
me.getName();  //my name is Jose

