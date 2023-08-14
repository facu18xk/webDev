//Write a JavaScript function to convert a decimal number to a binary, hexadecimal or octal number. 
function convertBase(number, base){
	if( number === undefined && base === undefined) return "Input and number, and the base to convert it" 
	return number.toString(base)
}
num = 12312312321321
console.log(convertBase(num, 16))
