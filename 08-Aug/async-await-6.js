const button = document.getElementById("loadDashboard");

const userCount = document.getElementById("usersCount");
const productCount = document.getElementById("productCount");
const postCount = document.getElementById("postCount");

const userContent = document.getElementById("usersContent");
const productContent = document.getElementById("productContent");
const postContent = document.getElementById("postContent");

button.addEventListener("click", async () => {
  try {
    const [users, posts, comments] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/comments"),
    ]);

    if (!users.ok | !posts.ok || !comments.ok)
      throw new Error("Failed to load the data!");

    const userData = await users.json();
    const postData = await posts.json();
    const commentsData = await comments.json();

    userCount.innerText = "Total users : " + userData.length;
    postCount.innerHTML = "Total posts : " + postData.length;
    productCount.innerText = "Total comments : " + commentsData.length;
  } catch (error) {
    console.log(error);
  }
});
