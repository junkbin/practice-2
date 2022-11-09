function sum(n1, n2) {
  if (n1 == undefined) {
    n1 = 0;
  }

  if (!n2) {
    n2 = 0;
  }

  return n1 + n2;
}

function main() {
  let output = sum(1, 2);
  console.log(output);
}

main();
