const content: String = await Deno.readTextFile('./data.txt')
const numbers: Array<string> = content.split('\n');

interface Rate {
	gamma: number,
	epsilon: number,
}

enum StringBit {
	One = '1',
	Zero = '0',
}

const bit1: Array<number> = new Array(numbers[0].length).fill(0);
const bit0: Array<number> = new Array(numbers[0].length).fill(0);

numbers.forEach(line => {
	for (let i = 0; i < numbers[0].length; i++) {
		if (line[i] == StringBit.Zero) bit0[i] += 1;
		else bit1[i] += 1;
	}
});

const responseRate: Rate = {
	gamma: parseInt(bit1.map((digit, i) => digit < bit0[i] ? 0 : 1).join(''), 2),
	epsilon: parseInt(bit1.map((digit, i) => bit0[i] < digit ? 0 : 1).join(''), 2),
}

const result = responseRate.gamma * responseRate.epsilon
console.log("Response rate:", responseRate, ". Result:", result)