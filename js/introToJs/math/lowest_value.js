//  Write a JavaScript function to find the lowest value in an array. 
function lowest_value(array){
	if(array.length > 0) return Math.min(...array)
	return "Input an array with elements"
}
arr = [-12,-34,0,-56,-1]
result = lowest_value(arr)
console.log(result)
