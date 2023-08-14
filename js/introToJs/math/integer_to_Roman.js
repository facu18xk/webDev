// Write a JavaScript function that converts an integer into a Roman numeral.
const numbers = {
	1: "I",
	4: "IV",
	5: "V",
	9: "IX",
	10: "X",
	40: "XL",
	50: "L",
	90: "XC",
	100: "C",
	400: "CD",
	500: "D",
	900: "CM",
	1000: "M"
}
let integers = Object.keys(numbers)
integers = integers.map(x => Number(x))
let roman = Object.values(numbers)
const toRoman = (number) =>{
	let i = 13, roman_number = ""
	while(number != 0){
		if(number-integers[i] >= 0){
			roman_number += roman[i]
			number -= integers[i]
		}else i--
	}
	return roman_number
}
console.log(toRoman(2023))
