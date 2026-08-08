async function getPosts() {
  console.log("Api call started!");

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const result = await response.json();

  console.log(result);

  console.log("Data received!");
}

getPosts();
