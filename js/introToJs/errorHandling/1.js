//4. Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is negative. 
const isNumber = (number) =>{
	try{
		if(isNaN(Number(number))){
			throw "Input a number value as an argument please";
		}
	}
	catch(error){
		console.log(error);
	}
}
isNumber("HEllo")
