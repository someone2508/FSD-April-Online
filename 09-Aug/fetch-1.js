// below is a basic example of a GET API call.

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data[0]);
//   })
//   .catch((error) => {
//     console.log("Something went wrong!");
//   });

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  console.log(data[0]);
}

getPosts();
