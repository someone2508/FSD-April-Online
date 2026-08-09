async function deletePost(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: "DELETE",
    }
  );

  const data = await response.json();

  console.log(response.status + " : " + response.statusText);
  console.log(data);
}

deletePost(10);
