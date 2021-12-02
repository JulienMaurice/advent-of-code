const content = await Deno.readTextFile('./data.txt')
const parsed = content
	.split('\n')
	.map(l=>l.split(' '))

const part1 = () => {
	let horizontal = 0;
	let depth= 0

	for (let [direction, nb] of parsed) {
		 let num = Number.parseInt(nb)
		 if (direction[0]==='f')  horizontal += num
		 if (direction[0]==='d') depth += num
		 if (direction[0]==='u') depth -= num
	}
	console.log('Part 1: ' + horizontal*depth)
}

//--------------P2
const part2 = () => {
	let aim = 0;
	let horizontal = 0;
	let depth = 0;

	for (let [direction2, nb2] of parsed) {
		let num = Number.parseInt(nb2)
		if (direction2[0]==='f') {
			horizontal += num
			depth += (aim*num)
		}
		if (direction2[0]==='d') aim += num
		if (direction2[0]==='u') aim -= num
	}
	console.log('Part 2: ' + horizontal*depth)
}

part1()
part2()
