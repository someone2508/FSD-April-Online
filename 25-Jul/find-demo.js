let users = [
  {
    role: "user",
    name: "pratik",
  },
  {
    role: "user",
    name: "mohammad",
  },
  {
    role: "user",
    name: "abhishek",
  },
];

// const adminUser = users.find((eUser) => eUser.role == "admin");

const adminUser = users.findIndex((eUser) => eUser.role == "admin");

console.log(adminUser);
