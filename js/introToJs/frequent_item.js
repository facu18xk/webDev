
function moreMatches(array){
	let moreFreq = 1, moreFreqIndex = 0
	for(let i = 0; i < array.length; i++){
		matches = 0
		for(let j = 0; j < array.length; j++)
			if(array[i] === array[j]) 
				matches++
		if(moreFreq < matches){
			moreFreq = matches
			moreFreqIndex = i
		}
	}
	return array[moreFreqIndex]
}
console.log(moreMatches([66567,47,4,3,3,3,3,3,3,1]))
