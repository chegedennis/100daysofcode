// Values are stored on the stack
const name = 'John';
const age = 30;

// Reference values are stored on the heap
const person = {
  name: 'Dennis',
  age: 40,
};

let newName = name;
newName = 'Johnathan';

let newPerson = person;
newPerson.name = 'Chege';

console.log(name, newName);
console.log(person, newPerson);
