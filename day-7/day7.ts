const data = "16,1,2,0,4,2,7,1,2,14";

const positions = data
	.split(',')
	.map(Number)
	.sort((a,b)=>a-b);

console.log(positions);