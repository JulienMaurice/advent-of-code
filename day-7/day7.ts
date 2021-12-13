const data = await Deno.readTextFile('./day-7/data.txt');

const positions = data
	.split(',')
	.map(Number)
	.sort((a,b)=>a-b);

const meetingPoint = positions[Math.floor(positions.length / 2)];

const fuelCost = positions
	.map(pos=>Math.abs(pos - meetingPoint))
	.reduce((a,b) => a + b, 0);

console.log(fuelCost)


