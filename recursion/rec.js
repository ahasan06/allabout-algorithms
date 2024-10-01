function sum(p) {
    console.log(`Function call sum(${p})`); 
    if (p === 0) {
        console.log("Base case reached: p === 0"); 
        return 1; 
    }
    let s = p + sum(p - 1); 
    console.log(`Returning: ${p} + sum(${p-1}) = ${s}`); 
    return s; 
}

let p = 10;
console.log(`Final result: ${sum(p)}`);
