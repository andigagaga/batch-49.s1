//CUSTOM HOF RETURN FUNCTION
function multiplyBy(x) {
    return function(n) {
        return x * n
    }
}

const double = multiplyBy(5)
console.log(double(2))



//CUSTOM HOF IMPLEMENTASI CALLBACK
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i)
    }
}

function logNumber (n) {
    console.log(`the number is ${n}`)
}

repeat(6, logNumber);