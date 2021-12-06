const input: String = await Deno.readTextFile('./day-5/data.txt');
//const input: String = await Deno.readTextFile('./day-5/dataExample.txt');

interface Coordinates {
	x: number;
	y: number;
}

interface Vector {
	start: Coordinates;
	end: Coordinates;
}

const points = input.split('\n').reduce((points, vector) => {
	const [start, end] = vector.split(' -> ');
	const [xStart, yStart] = start.split(',').map(Number);
	const [xEnd, yEnd] = end.split(',').map(Number);

	const xN = xEnd - xStart;
	const yN = yEnd - yStart;

	const pointsNumber = Math.abs(xN) > Math.abs(yN) ? Math.abs(xN) : Math.abs(yN);

	const vectorPoints = Array.from({ length: pointsNumber + 1 }).reduce((pts: Array<string>, _, index) => {
		let x = xStart;
		let y = yStart;
		// let isLinear = 0;

		if (index !== 0 && xEnd !== xStart) {
			// isLinear = isLinear + 1;
			x = xEnd < xStart ? xStart - (index) : xStart + (index);
		}

		if (index !== 0 && yEnd !== yStart) {
			// isLinear = isLinear + 1;
			y = yEnd < yStart ? yStart - (index) : yStart + (index);
		}

		/*if (isLinear === 2) {
			return pts;
		}*/


		return [...pts, `${x}-${y}`];
	}, [] as Array<string>)

	console.log(vectorPoints);

	if (vectorPoints.length <= 1) {
		return points;
	}

	return [...points, ...vectorPoints];

}, [] as Array<string>);

const repeatedPointsNumber = points.reduce((pts, point, index) => {
	const { length: pointsNumber } = points.filter((p) => p === point);

	if (pointsNumber > 1 && !pts.includes(point)) {
		return [...pts, point];
	}

	console.log(`${index}/${points.length}`);

	return pts;
}, [] as Array<string>);

console.log(repeatedPointsNumber.length)