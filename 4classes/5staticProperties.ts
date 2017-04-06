//Those that are visible on the class itself rather than on the instances

class MessagSender {
	static interval = 70;
	constructor(public message: string){}
	sendmessage(){
		console.log(`Message -> ${this.message} sent after ${MessagSender.interval} ms`);
	}
}

const messageSender = new MessagSender('Fire');
setTimeout(function(){
	messageSender.sendmessage();
}, MessagSender.interval)