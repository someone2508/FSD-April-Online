const student1 = {
  name: "Jitender",
  greet: function () {
    console.log(this);
  },
};

const student2 = {
  name: "Pradeep",
  greet: () => {
    // gotcha: arrow function do not maintain a reference of this keyword, it simply points to the global object.
    console.log(this);
  },

  greet2: function () {
    console.log(this.name);
  },
};

student1.greet();
student2.greet();
