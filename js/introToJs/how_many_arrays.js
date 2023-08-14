/Write a JavaScript program to count the number of arrays inside a given array. 
let array = [12,1212,[12,121], [12312,1212321,1]]
function arrayInsideArray(arr){
	array_counter = 0
	arr.forEach(el=> {
		if(Array.isArray(el)) 
			array_counter++
	})
	return array_counter
}
console.log(arrayInsideArray(array))
