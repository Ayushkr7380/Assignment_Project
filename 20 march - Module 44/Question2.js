function getPerson(person) {
    try {
      if (typeof person === 'object' && person !== null && 'name' in person && 'age' in person) {
        return `Name: ${person.name}, Age: ${person.age}`;
      } else {
        throw new Error("Invalid parameter type");
      }
    } catch (error) {
      return error.message;
    }
  }
  
  const validPerson = { name: "John Doe", age: 30 };
  const invalidPerson = { name: "John Doe" };
  
  console.log(getPerson(validPerson));
  console.log(getPerson(invalidPerson));  
  console.log(getPerson("John Doe"));  
  