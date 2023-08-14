//ite a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments. 
class University{
	constructor(name, departments = []){
		this.name = name;
		this.departments = departments;
	}
	addDepartments(depa){
		this.departments.push(depa)
		return this.departments
	}
	removeDepartments(depa){
		if(this.departments.includes){
			this.departments.splice(this.departments.indexOf(depa), 1)
		}
		else{
			return "The element to remove doesn't exist"
		}
		return this.departments
	}
}
const uni = new University("Uni", ["Fiuni", "Humanidades"])
console.log(uni.addDepartments("Med school"))
console.log(uni.removeDepartments("Fiuni"))

