// promise
let condition = true;

let promise = new Promise(function (resolve, reject) {
  if (condition) {
    resolve("Promise is resolved");
  } else {
    reject("Promise is rejected");
  }
});

// console.log(promise);
// Mengapa hasilnya adalah "Promise"? Karena kita perlu menunggu, itulah inti dari Promise. Kita seharusnya mengaksesnya seperti ini:
promise
  .then(function (value) {
    console.log(value);
    return alert("The promise is fulfilled!");
  })
  .catch(function (reason) {
    console.log(reason);
  });