// Do it and send it later

// Write a function that flattens an Array of Array objects into a flat Array. Our function must flatten any given array input

// [1, 2, [3, 4]]  : result [1, 2, 3, 4]
// [1, 2, [3, 4, [5, 6]]]: result [1, 2,3, 4, 5, 6]
// [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]: result
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function flatArray(rawArray, finalArray) {
  rawArray.forEach(item => {
    if (Array.isArray(item)) flatArray(item, finalArray)
    else finalArray.push(item)
  });
  return finalArray
}

const array_1 = [1, 2, [3, 4]]
const flattenedArray1 = flatArray(array_1, [])
console.log(flattenedArray1)

const array_2 = [1, 2, [3, 4, [5, 6]]]
const flattenedArray2 = flatArray(array_2, [])
console.log(flattenedArray2)

const array_3 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
const flattenedArray3 = flatArray(array_3, [])
console.log(flattenedArray3)

