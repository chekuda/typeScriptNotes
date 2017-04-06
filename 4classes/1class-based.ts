/*******
	TYPESCRIPT
********/
class Student {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName() {
        return "My name is, " + this.name;
    }
}

const newStudent = new Student("Jose").getName();
