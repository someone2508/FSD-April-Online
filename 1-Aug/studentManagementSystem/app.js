const addBtn = document.getElementById("addBtn");
const studentInput = document.getElementById("studentName");
const container = document.getElementById("studentContainer");
const darkModeBtn = document.getElementById("darkModeBtn");

let rollNumber = 101;

// add student
addBtn.addEventListener("click", function () {
  const name = studentInput.value.trim();

  if (name === "") {
    alert("Please enter a valid student name");
    return;
  }

  //   create a UI Card

  const card = document.createElement("div");

  card.classList.add("student-card");

  const heading = document.createElement("h3");
  heading.innerText = name;

  const p = document.createElement("p");
  p.innerText = "Roll Number : " + rollNumber;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";

  deleteBtn.addEventListener("click", function () {
    container.removeChild(card);
  });

  const activeBtn = document.createElement("button");

  activeBtn.innerText = "Active / Inactive";

  activeBtn.addEventListener("click", function () {
    card.classList.toggle("active");
  });

  //   append items in the card
  card.append(heading, p, deleteBtn, activeBtn);

  //   append the card in the body
  container.append(card);

  studentInput.value = "";

  rollNumber++;
});

let darkMode = false;

darkModeBtn.addEventListener("click", () => {
  if (darkMode === false) {
    document.body.style.background = "#222";
    document.body.style.color = "white";

    darkMode = true;
  } else {
    document.body.style.background = "#f5f5f5";
    document.body.style.color = "black";

    darkMode = false;
  }
});
