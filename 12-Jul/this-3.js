const person = {
  name: "Rahul",
  greet: function () {
    console.log(this.name);
  },
};

const anotherPerson = {
  name: "Amit",
};

// adding the greet function inside the anotherPerson obj
anotherPerson.greet = person.greet;

anotherPerson.greet(); // Amit
