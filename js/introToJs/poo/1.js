// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details. 
class Person{
	constructor(name, age, country){
		this.name = name 
		this.age = age  
		this.country = country
	}
	showData(){
		return `Hi, My name is ${this.name}, I'm ${this.age} years old and I'm from ${this.country}`
	}
}
let face = new Person("Facu", 12, "Paraguay")
console.log(face)
