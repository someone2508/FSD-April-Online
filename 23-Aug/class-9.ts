class Employee {
  protected salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }
}

const emp = new Employee(50000);

console.log(emp.salary);
