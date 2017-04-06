// /*******
// 	TYPESCRIPT
// ********/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//superClass
var Person = (function () {
    function Person() {
        this.name;
        this.surname;
    }
    Person.prototype.setfullName = function (name, surname) {
        this.name = name;
        this.surname = surname;
    };
    return Person;
}());
var Me = (function (_super) {
    __extends(Me, _super);
    function Me() {
        _super.call(this); //The super keyword is used to call functions on an object's parent.
    }
    Me.prototype.setfullName = function (name, surname) {
        if (name === void 0) { name = 'jose'; }
        if (surname === void 0) { surname = 'checa'; }
        _super.prototype.setfullName.call(this, name, surname);
    };
    Me.prototype.getName = function () {
        console.log('My name is ' + this.name + ' ' + this.surname);
    };
    return Me;
}(Person));
var me = new Me();
console.log(me instanceof Me); //true
console.log(me instanceof Person); //true
me.setfullName('jose', 'checa');
me.getName(); //my name is Jose
