
// process.stdout.write('hello from spinner1.js... \rheyyy\n');
// const spins = (spin) => {
//   const timeIncrement = 0;
//   let x = 0;
//   let spinner = ['\r| ' , '\r/ ' , '\r- ' , '\r\\ ']
//   while (x <= spin ){
//   for(let sPin of spinner) {
//     setTimeout(() => {
//     process.stdout.write(sPin)
//   },  (timeIncrement + 100));
//   timeIncrement +=200
//   }
// };
// };



const spinner2 = (spinny) => {
  let spins = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];
  let increment = 100;
  let x = 0
  while (x < spinny) {
  for (const spin of spins) {
    setTimeout(() => {
      process.stdout.write(`\r${spin}`);
    }, increment);
    increment += 200;
  }
  x++;
  process.stdout.write('\n');
  }
}


spinner2(7);