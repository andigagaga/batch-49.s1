// CALLBACK/MENJALANKAN FUNCTION 1 MELALUI FUNCTION 2/DALAM FUNCTION ADA FUNCTION

// function hello() {
//     console.log("hello world")
// }

// function goodBye() {
//     console.log("good Bye wolrd")
// }

// function print(callback) {
//     callback()
// }
// print(hello)
// print(goodBye)

function hello() {
    console.log("hello ira")
}

function goodBye() {
    console.log("goodBye ira")
}

function print(callback) {
    callback()
}

print(hello)
print(goodBye)