function appId(x: {}[]): number;
function appId(x: string): {};
function appId(x:any){
	return x;
}

console.log(typeof appId('1234'));
