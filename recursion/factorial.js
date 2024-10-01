
function factorial(data) {
    if (data === 1) {
        return 1
    }

    return data * factorial(data - 1)
}
const data = 4
console.log(factorial(data));
