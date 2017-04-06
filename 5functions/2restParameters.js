//If you dont know how many parametes be received. NULL CAN BE PASSED
function featuresActived(appId) {
    var allfeatures = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        allfeatures[_i - 1] = arguments[_i];
    }
    return allfeatures.filter(function (feature) {
        return feature === 'inactivity';
    });
}
console.log(featuresActived(123, 'exit', 'inactivity', null));
