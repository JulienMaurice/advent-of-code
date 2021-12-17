const data = await Deno.readTextFile('./day-13/data.txt');

type Dot = {
	x: number,
	y: number;
}

type Fold = Record<string, number>

type Grid = {
	height: number;
	width: number;
}

const [coordinatesGrouped, foldInstructionsGrouped] = data.split('\n\n');

let coordinates: Array<Dot> = coordinatesGrouped
	.split('\n')
	.map((v)=> v.split(',').map(Number)).map((coordinates) => {
		return {
			x: coordinates[0],
			y: coordinates[1]
		}
	})


const foldInstructions: Fold[] = foldInstructionsGrouped
	.trim()
	.split('\n')
	.map((instruction) => {
		const separator = instruction.lastIndexOf('=')
		const direction = instruction.charAt(separator -1);
		const value = instruction.substring(separator+1);

		return {
			[direction]: parseInt(value, 10)
		}
	});

function fold(coordinate: Dot, foldInstruction: Fold) {
	if (foldInstruction.x) {
		if (coordinate.x > foldInstruction.x) {
			return {
				x: foldInstruction.x - (coordinate.x - foldInstruction.x),
				y: coordinate.y
			}
		} else {
			return {x: coordinate.x, y: coordinate.y}
		}
	} else {
		if (coordinate.y > foldInstruction.y) {
			return {
				x: coordinate.x,
				y: foldInstruction.y - (coordinate.y - foldInstruction.y)
			}
		} else {
			return {x: coordinate.x, y: coordinate.y}
		}
	}
}

let finalResult: Array<Dot> = [];

for (let instruction of foldInstructions) {
	coordinates.map((v,i) => coordinates[i] = fold(v, instruction))

	finalResult = coordinates.reduce((unique:Array<Dot>, value: Dot): Array<Dot> => {
		if (!unique.some( (coord: Dot) => coord.x === value.x && coord.y === value.y)) {
			unique.push(value)
		}
		return unique
	}, [])
}

const grid: Grid = {
	width: Math.max(...finalResult.map((coord: Dot) =>coord.x)),
	height: Math.max(...finalResult.map((coord: Dot)=>coord.y)),
}

let gridDisplay: Array<string> = [];

for (let y = 0; y <= grid.height; y++) {
	for (let x = 0; x <= grid.width; x++) {
		if (finalResult.some(e => x === e.x && y === e.y)) {
			gridDisplay.push('#')
		} else {
			gridDisplay.push(' ')
		}
	}
	gridDisplay.push('\n')
}

console.log(gridDisplay.join(''))