// let employees = [
//     {name: 'John Smith', jobTitle: 'Manager', salary: '$30/hour', status: true },
//     {name: 'Bob Dallas', jobTitle: 'Clerk', salary: '$18/hour', status: false},
//     {name: 'Joe Jackson', jobTitle: 'Clerk', salary: '$18/hour', status: true },
//     {name: 'Mack Curtis', jobTitle: 'Representative', salary: '$15/hour', status: true },
//     {name: 'Abby Webster', jobTitle: 'Janitor', salary: '$15/hour', status: false },
// ]

let employees = []
function Employee (name, title, salary, status = 'Full Time'){
    this.Name = name;
    this.Job_Title = title;
    this.Salary = salary;
    this.Status = status
}
    const employee1 = new Employee("John", "manager", "$30/hour", "Contract")
    const employee2 = new Employee("Matt", "clerk", "$30/hour", "Part Time")
    const employee3 = new Employee("Sally", "rep", "$30/hour")

console.log(employee1)
console.log(employee2)
console.log(employee3)
