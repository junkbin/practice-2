function main() {
  console.log(1);

  // callback :: async :: non-blocking statment
  setTimeout(() => console.log(2), 0);

  console.log(3);
}

main();
