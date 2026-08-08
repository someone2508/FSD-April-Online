async function getNumber() {
  return 100;
}

async function main() {
  const result = await getNumber();

  console.log(typeof result);

  console.log(result);
}

main();
