//If your interface can get more unknown properties
//you can add an extra property like this

interface IWidget{
	isEnabled: boolean;
	top: number;
	[propName: string]: any //1-their types doesnt matter
}

function isWidgetEnabled(enabled: IWidget){
	console.log(enabled)
}

//2-const jose = {isEnabled: true, top: 10, background: 'red'} 

isWidgetEnabled({isEnabled: true, top: 10, background: 'black'});

//3-isWidgetEnabled({isEnabled: true, top: 10, jose: 'mama'} as IWidget);// catching