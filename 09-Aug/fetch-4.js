async function updatePost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 1,
      title: "updated title",
      body: "updated content",
      userId: 1,
    }),
  });

  const data = await response.json();

  console.log(response.status + " : " + response.statusText);
  console.log(data);
}

updatePost();
