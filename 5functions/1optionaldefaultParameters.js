//Every parameter is assumed to be required by the function.
//Can be undefined or null
var newFeature = function (k, n) {
    console.log(k + n);
};
function feature(key, namespace, journeyId) {
    if (key === void 0) { key = "panel"; }
    console.log(journeyId);
    return key + "-" + namespace;
}
//let firstFeature = feature("Bob");                 
var secondFeature = feature(undefined, "Adams");
