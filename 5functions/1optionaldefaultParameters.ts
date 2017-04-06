//Every parameter is assumed to be required by the function.
//Can be undefined or null

let newFeature: (key:string, namespace: string) => void =
	function (k: string, n: string){
		console.log(k + n);
	}


function feature( namespace: string,key = "panel", journeyId?: string):string {
	console.log(journeyId);
    return key + "-" + namespace;
}

let firstFeature = feature("Bob");                 
let secondFeature = feature(undefined, "Adams"); 