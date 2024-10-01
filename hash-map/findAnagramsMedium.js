var findAnagrams = function (s, p) {
    let result = []
    let windowSize = p.length
    let sortedp = p.split('').sort().join('');

    for (let i = 0; i <=s.length - windowSize; i++) {
        let window = s.substring(i,i+windowSize)
        let sortedWindow = window.split('').sort().join('')
        if (sortedWindow==sortedp) {
           result.push(i) 
        }
    }
    return result
    
  

};
const s = "abab", p = "ab"
console.log(findAnagrams(s, p));
