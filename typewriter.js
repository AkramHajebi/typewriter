let sentence = "hello there from lighthouse labs";
let time = 0;
sentence = `${sentence}  \n`;
for (const char of sentence) {
  setTimeout(() => {process.stdout.write(char);}, time) // <= 1s delay to make it noticeable. Can dial it down later.
  time += 50;
}
console.log();