const button = document.getElementById("loadBtn");
const mainDiv = document.getElementById("users");

button.addEventListener("click", async () => {
  mainDiv.innerHTML = "Loading...";

  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const users = await response.json();

  mainDiv.innerHTML = "";

  users.forEach((user) => {
    const div = document.createElement("div");

    div.innerHTML = `
        <h3>${user.name}</h3>
        <h3>${user.email}</h3>
        <h3>${user.phone}</h3>
    `;

    div.style.border = "1px solid black";

    mainDiv.append(div);
  });
});
