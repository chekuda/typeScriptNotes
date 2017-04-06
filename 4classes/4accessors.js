//This is used to give more security when change any value of a property within an instance
//Need compiler ES6
var journeyId = '000000';
var App = (function () {
    function App(_appId) {
        this._appId = _appId;
    }
    Object.defineProperty(App.prototype, "appId", {
        get: function () {
            return this._appId;
        },
        set: function (newAppId) {
            if (journeyId === '000000') {
                this._appId = newAppId;
            }
        },
        enumerable: true,
        configurable: true
    });
    return App;
}());
var app = new App('111111');
console.log("Old App Id: " + app.appId);
app.appId = '123456';
console.log("New App Id: " + app.appId);
