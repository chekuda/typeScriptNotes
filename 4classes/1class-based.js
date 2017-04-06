/*******
    TYPESCRIPT
********/
var Student = (function () {
    function Student(name) {
        this.name = name;
    }
    Student.prototype.getName = function () {
        return "My name is, " + this.name;
    };
    return Student;
}());
var newStudent = new Student("Jose").getName();
