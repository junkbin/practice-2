function sum(n1, n2) {
  return new Promise((resolve, reject) => {
    console.log("Inside Sum");

    if (n1 == undefined) {
      n1 = 0;
    }

    if (!n2) {
      n2 = 0;
    }

    resolve(n1 + n2);
  });
}

function main() {
  let output = sum(1, 2);
  console.log(output);
}

main();
