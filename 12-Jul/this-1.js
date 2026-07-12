// function declaration
function show() {
  console.log(this);
}

// you are calling this show func from a global location
show();
let x = 10;

const student = {
  name: "Rahul",
  greet: function () {
    console.log(this);
  },
};

student.greet();
