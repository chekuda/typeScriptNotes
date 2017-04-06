/*******
    TYPESCRIPT
********/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Teacher = (function () {
    function Teacher(name, surname, address) {
        this.name = name;
        this.surname = surname;
        this.address = address;
    }
    return Teacher;
}());
var TeacherExtended = (function (_super) {
    __extends(TeacherExtended, _super);
    function TeacherExtended() {
        _super.call(this, 'Jose', 'checa', 'Bakers row');
    }
    TeacherExtended.prototype.getSurname = function () {
        return this.surname;
    };
    return TeacherExtended;
}(Teacher));
var MyFriend = (function () {
    function MyFriend(name, surname, address) {
        this.name = name;
        this.surname = surname;
        this.address = address;
    }
    return MyFriend;
}());
var person = new Teacher('Jose', 'checa', 'Bakers row');
person.name;
//Also a constructor can be marked as protected thas mean
//the class cant be instatiated out of its containing class, but can be extended
// //COMPARING PRIVATES
// //However, when comparing types that have private and protected members,
// //if one of them has a private member, then the other must have a private member that originated in the same declaration. 
var myself = new TeacherExtended();
var myfriend = new MyFriend('Jose', 'checa', 'Bakers row');
console.log(myself == person);
//console.log(MyFriend === person);
