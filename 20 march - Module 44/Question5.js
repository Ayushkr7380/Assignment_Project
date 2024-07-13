class Person {
    constructor(name = "Unknown", age = 0) {
      this.name = name;
      this.age = age;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
}
  
const person1 = new Person("Ayush", 25);
const person2 = new Person();
  
console.log(person1.getDetails()); 
console.log(person2.getDetails());  
  