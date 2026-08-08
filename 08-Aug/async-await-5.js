async function getPosts() {
  console.log("Api call to /posts");

  const respone = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await respone.json();

  console.log("Posts received!");

  return posts;
}

async function getUsers() {
  console.log("Api call to /users");

  const respone = await fetch("https://jsonplaceholder.typicode.com/users");

  const users = await respone.json();

  console.log("Users received!");

  return users;
}

async function getTodo() {
  console.log("Api call to /todos");

  throw Error("Some error occured!");

  const respone = await fetch("https://jsonplaceholder.typicode.com/todos");

  const todos = await respone.json();

  console.log("Todos received!");

  return todos;
}

// sequential execution

// async function main() {
//   console.log("Main function started!");

//   await getUsers(); // 2 secs

//   await getTodo(); // 2 secs

//   await getPosts(); // 2 secs

//   console.log("Main function completed!");
// }

// main();

async function main() {
  try {
    console.log("Main function started!");

    const [posts, users, todo] = await Promise.all([
      // 2 secs
      getPosts(),
      getUsers(),
      getTodo(),
    ]);

    console.log(posts[0]);
    console.log(users[0]);
    console.log(todo[0]);

    console.log("Main function completed!");
  } catch (error) {
    console.log(error);
  }
}

main();

async function getUser(email) {
  // finds the user with the email

  return user.id;
}

async function getPostOfUser(userId) {
  // fetchs the posts for the given userId

  return posts;
}

const email = "jitender@gmail.com";

const userId = getUser(email);

const posts = getPostOfUser(userId);
