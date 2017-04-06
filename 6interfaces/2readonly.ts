interface IApp{
	readonly name: string;
	events: ReadonlyArray<string>; //remove all the mutated method
}

let panel: IApp = { name: 'panel', events: ['exit','exitIntent']};

//panel.name = 'chat';
//panel.events[0] = 'backbutton'
