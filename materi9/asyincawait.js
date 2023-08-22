// Apa itu async-await? Intinya, async-await adalah cara lain untuk memanggil promise, tetapi terlihat seperti dalam mode sekuensial (synchronous).

let condition = true;

let promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Promise is resolved");
  } else {
    reject("Promise is not fulfilled");
  }
});

// jika sebelumnya kita memanggil promise seperti ini:
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((reason) => {
//     console.log(reason);
//   });

// sekarang, dengan async-await, kita dapat memanggilnya seperti ini:
async function asyncFunction() {
  const response = await promise;
  console.log(response);
}

asyncFunction(); // kita panggil fungsi di sini