function firstValue (array: Array<number>, index: number) {
    return array[index - 1] + array[index] + array[index + 1]
}
function secondValue (array: Array<number>, index: number) {
    return array[index] + array[index + 1] + array[index + 2]
}

//DATA
const content = await Deno.readTextFile('./data.txt')
const parsed = content.split('\n').map(e=>Number.parseInt(e, 10));

// PART 1
const byReduce = parsed
    .reduce(
        (count, curValue, index, arr) => index > 0 && curValue > arr[index - 1] ? ++count : count, 0
    );

const byLengthOfResult = parsed
    .filter((curValue, index, array) => index > 0 && curValue > array[index - 1])
    .length

// PART 2
const byLengthOfResult2 = parsed
    .filter((curValue, index, array) => index > 0 && firstValue(array, index) < secondValue(array, index))
    .length

const byReduce2 = parsed
    .reduce((count, curValue, index, arr)=> index > 0 && firstValue(arr, index) < secondValue(arr,index) ?  ++count : count, 0)


console.log(byReduce, byLengthOfResult, byLengthOfResult2, byReduce2)

