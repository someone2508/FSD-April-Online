async function createPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Learning Fetch API",
      body: "Today I Leared Post Api Calls",
      usedId: 1,
    }),
  });

  const data = await response.json();

  console.log(data + " : " + response.status + " : " + response.statusText);
}

createPost();
