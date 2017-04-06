//If you dont know how many parametes be received. NULL CAN BE PASSED

function featuresActived(appId: number, ...allfeatures: string[]) {// always an array
	return allfeatures.filter(function(feature){
		return feature === 'inactivity';
	})
}

console.log(featuresActived(123, 'exit', 'inactivity', null));