class Employee {
    constructor(name, salary) {
        this.name = name;  // public
        this._salary = salary;  // protected (використовуючи конвенцію _ для позначення)
    }

    // Абстрактний метод
    displayDetails() {
        throw new Error("Abstract method - should be implemented by subclasses");
    }

    get salary() {
        return this._salary;
    }

}

// Дочірній клас 1
class Manager extends Employee {
    constructor(name, salary, teamSize) {
        super(name, salary);
        this.teamSize = teamSize;  // public
    }

    displayDetails() {
        console.log(`Manager: ${this.name}, Salary: ${this.salary}, Team Size: ${this.teamSize}`);
    }
}

class Developer extends Employee {
    constructor(name, salary, programmingLanguage) {
        super(name, salary);
        this.programmingLanguage = programmingLanguage;  // public
    }

    // Реалізація абстрактного методу
    displayDetails() {
        console.log(`Developer: ${this.name}, Salary: ${this.salary}, Language: ${this.programmingLanguage}`);
    }
}

function main() {
    const employees = [
        new Manager("John Doe", 80000, 10),
        new Developer("Jane Smith", 60000, "JavaScript"),
        new Developer("Bob Johnson", 70000, "Python")
    ];

    for (const employee of employees) {
        employee.displayDetails();
    }
}

main();
