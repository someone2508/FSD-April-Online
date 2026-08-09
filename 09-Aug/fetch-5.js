async function updatePost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "only the title is updated",
    }),
  });

  const data = await response.json();

  console.log(response.status + " : " + response.statusText);
  console.log(data);
}

updatePost();
