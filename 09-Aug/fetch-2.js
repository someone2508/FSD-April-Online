async function getPost(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const data = await response.json();

  console.log(data);
}

getPost(15);
