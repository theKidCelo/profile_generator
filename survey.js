const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable :) ', (answer) => {
  console.log(`Hey : ${answer}`);
rl.question('What is an activity you like doing? ', (answer) => {
    console.log(`that sound fun: ${answer}`);
rl.question('What do you listen to while doing that? ', (answer) => {
    console.log(`Nice!: ${answer}`);
rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
    console.log(`Tasty!: ${answer}`);
rl.question('What is your favourite thing to eat for that meal?', (answer) => {
    console.log(`Yummy: ${answer}`);
rl.question('Which sport is your absolute favourite? ', (answer) => {
    console.log(`that sound fun: ${answer}`);



  
    rl.close();
  });
  //rl.close();
});
