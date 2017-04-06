//Those that are visible on the class itself rather than on the instances
var MessagSender = (function () {
    function MessagSender(message) {
        this.message = message;
    }
    MessagSender.prototype.sendmessage = function () {
        console.log("Message -> " + this.message + " sent after " + MessagSender.interval + " ms");
    };
    MessagSender.interval = 70;
    return MessagSender;
}());
var messageSender = new MessagSender('Fire');
setTimeout(function () {
    messageSender.sendmessage();
}, MessagSender.interval);
