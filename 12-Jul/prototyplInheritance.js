function Employee1(name) {
  this.name = name;

  //   this.show = function () {
  //     console.log(this.name);
  //   };

  Employee1.prototype.show = function () {
    console.log(this.name);
  };
}

let e1 = new Employee1("Nitesh!");
e1.show();

let e2 = new Employee1("Jitender!");
e2.show();

console.log(e1.__proto__);
