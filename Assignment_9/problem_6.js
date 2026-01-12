//Object with greeting message
const person = {
  name: "anshul",
  age: 22,
  occupation: "student"
};

function greetPerson(person) {
  console.log(
    `Hello, my name is ${person.name}. I am ${person.age} years old and work as a ${person.occupation}.`
  );
}
greetPerson(person);