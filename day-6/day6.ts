
const input: String = await Deno.readTextFile('./day-6/data.txt');

const lanternfish: Array<number> = input.split(',').map(Number)

const NUMBER_OF_DAY: number = 80;
const NUMBER_OF_DAY_PART_2: number = 256
const NEW_BORN: number = 8;
const LIMIT_DAY: number = 0;
const ROLLBACK_DAY: number = 6;

for (let i = 0; i < NUMBER_OF_DAY; ++i) {
	lanternfish.map((internalTimer:number, index ) => {
		if (internalTimer === LIMIT_DAY) {
			lanternfish[index] = ROLLBACK_DAY;
			lanternfish.push(NEW_BORN)
		} else {
			lanternfish[index] -= 1;
		}
	})
}

const array: Array<number> = new Array(9).fill(0)



