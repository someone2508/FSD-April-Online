let user = {
  name: "Rahul",
};

// console.log(user.address?.city === undefined ? "no city" : "city is there"); // undefined.city

let response = undefined;

// console.log(response?.data?.user?.name);

let employees = [
  {
    name: "kamani",
    salary: 100000,
  },
  {
    name: "abhishek",
    salary: 120000,
  },
  {
    name: "altaf",
  },
];

// give me the total sum of salary of employee 1, 3, 5, 7.

let idxs = [1, 3, 5, 7];

let sum = 0; // 100000

idxs.forEach((idx) => {
  sum += employees[idx - 1]?.salary || 0;
});

// console.log(sum);

let teams = [
  {
    leaderName: "pratik",
    teamMembers: [
      {
        memberName: "altaf",
      },
      {
        memberName: "kamini",
      },
    ],
  },
  {
    leaderName: "abhishek",
    teamMembers: [
      {
        memberName: "nitesh",
      },
      {
        memberName: "ravi",
      },
    ],
  },
];

// employees = [...........]

const allTeamMembers = teams.reduce((members, team) => {
  members.push(team.leaderName);

  team.teamMembers?.forEach((eTeamMember) => {
    members.push(eTeamMember.memberName);
  });

  return members;
}, []);

console.log(allTeamMembers);
