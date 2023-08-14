// Una funcion que pasandole un binomio me retorne el valor del producto del binomio al cuadrado

const numberAndLetters = (mathExp) =>{
	let nNletters = {numbers: 0, letters: []}
	arr = mathExp.split("")
	arr.forEach((el)=>{
		if(isNaN(Number(el))){
			nNletters.letters.push(el)
		}else{
			nNletters.numbers += Number(el)
		}
	})
	return nNletters
}
let result = numberAndLetters("2xy")
console.log(result)
function squareBinomial(binomial){
	let product = ""
	if(binomial.search("+") > 0){
		binomial = binomial.split("+")
	}else{
		binomial = binomial.split("-")
	}
}
