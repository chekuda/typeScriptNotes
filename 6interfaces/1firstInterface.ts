
//These function will require that enable has at least isEnabled properti
function itsEnabled(enable: {isEnabled: boolean}){
	console.log(enable);
}

const myFeacture = {isEnabled: true, top: 10};

itsEnabled(myFeacture);


interface IWidget{
	isEnabled: boolean;
	top: number;
}

function isWidgetEnabled(enabled: IWidget){
	console.log(enabled)
}

const widgetFeature = {isEnabled: true, top: 10};

isWidgetEnabled(widgetFeature);

