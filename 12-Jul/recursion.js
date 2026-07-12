function print(n) {
  // base case -> breaking point
  if (n < 1) return;

  // recurrsive call -- other people work
  print(n - 1);

  // recurrsive logic -- this is my work -> backtracking
  console.log(n);
}

print(5);
