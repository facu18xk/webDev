let body = document.querySelector(".bod");
let button = document.querySelector(".button");
const randomColor = () =>{
	let color = ""
	color = color+ Math.round(Math.random()*256).toString()
	color = color + ","
	color = color+ Math.round(Math.random()*256).toString()
	color = color + ","
	color = color+ Math.round(Math.random()*256).toString()
	color = color.split("")
	color.unshift("rgb(")
	color.push(")")
	color = color.join("")
	return color
}
const setRandomColor = () =>{
	body.style.background = randomColor()
}
button.addEventListener("click", setRandomColor)

