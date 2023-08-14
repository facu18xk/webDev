
//3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.

const returnElement = (array, n = 1) => {
	let result = []
	for(let i = 0; i < n; i++ ){
		result.push(array[i])
	}
	return result
}
let numbers = [1,3,4,45,1]
console.log(returnElement(numbers))
