function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Data is not Received!");
    }, 2000);
  });
}

/**
 * await: i am okay to wait on the same line, but i do not want to chain .then, .catch.
 *
 * 1) it can only be used in front of a function which is returning a promise.
 * 2) it can only be used inside a function which is marked as async
 */
async function main() {
  try {
    console.log("Start!");

    const response = await getData();

    console.log(response);

    console.log("End!");
  } catch (error) {
    console.log(error);
  }
}

main();
