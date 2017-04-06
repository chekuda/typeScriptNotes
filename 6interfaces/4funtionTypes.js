//To describe a function type with an interface,
//we use a call signature.
var getTimesAppFire;
//Function parameters are checked one at a time, 
//with the type in each corresponding parameter position checked against each other
getTimesAppFire = function (name, session, numberFires) {
    var number = numberFires;
    return number; // The return should match with the type return
};
