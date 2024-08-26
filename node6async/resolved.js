let a = 20;
let b = 40;
let waitingData = new Promise((resolve, rejected) => {
  setTimeout(() => {
    resolve(30);
  }, 2000);
});
waitingData.then((data) => {
  //then handles the resolve value from the promises
  b = data;
  console.log(a + b);
});
