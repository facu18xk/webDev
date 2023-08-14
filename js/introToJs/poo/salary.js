//  Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary. 
class Employee{
	constructor(name, salary){
		this.name = name
		this.salary = salary
	}
	annualSalary(){
		return (this.salary * 12)
	}
}
class Manager extends Employee{
	constructor(name, salary, department, bonuses){
		super(name, salary)
		this.bonuses = bonuses
		this.department = department
	}
	annualSalary(){
		let result = super.annualSalary()
		result += this.bonuses 
		return result
	}
}
const manager1 = new Manager("Facu", 1, "IT", 12)
console.log(manager1.annualSalary())
