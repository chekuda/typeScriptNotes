//Interfaces describe the public side of the class,
//This prohibits you from using them to check that a class 
var Panel = (function () {
    function Panel(id) {
        this.id = id;
    }
    Panel.prototype.setId = function (journey) {
        //do XMLHTTPrequest
        console.log(this.id);
    };
    return Panel;
}());
var panel = new Panel(12345).setId('my-journeyId');
//Usable when you want to test other class which use this class
//but dont want to use the class itself because of the request 
