
/*******
	TYPESCRIPT
********/

class Teacher {
    public name: string;
    protected surname: string;
    private address: string;
    public constructor(name: string, surname: string,address: string) {
        this.name = name;
        this.surname = surname;
        this.address = address;
    }
}

class TeacherExtended extends Teacher {
    constructor(){
        super('Jose','checa','Bakers row');
    }
    getSurname(){
        return this.surname;
    }
}

class MyFriend {
    public name: string;
    protected surname: string;
    private address: string;
    constructor(name: string, surname: string ,address: string){
        this.name = name;
        this.surname = surname
        this.address = address;
    }
}

const person = new Teacher('Jose','checa', 'Bakers row');
person.name;
//Also a constructor can be marked as protected thas mean
//the class cant be instatiated out of its containing class, but can be extended

// //COMPARING PRIVATES
// //However, when comparing types that have private and protected members,
// //if one of them has a private member, then the other must have a private member that originated in the same declaration. 
const myself = new TeacherExtended();
const myfriend = new MyFriend('Jose','checa','Bakers row');
console.log(myself == person);
//console.log(MyFriend === person);

