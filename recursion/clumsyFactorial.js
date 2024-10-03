var trailingZeroes = function(n) {

    if (n<5) {
        
        return 0
    }
    return Math.floor(n/5) + trailingZeroes(Math.floor(n/5))
};

console.log(trailingZeroes(100));


