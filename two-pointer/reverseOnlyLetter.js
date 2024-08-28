// 917. Reverse Only Letters

var reverseOnlyLetters = function (s) {
    
        let char = s.split('')
        let left = 0;
        let right = char.length - 1
        
        function isLetter(c) {
            return /[a-zA-Z]/.test(c)
            
        }

        while (left < right) {
            if(!isLetter(char[left])) {
                left ++
            }
            if(!isLetter(char[right])) {
              right --
            }
            if(isLetter(char[left]) && isLetter(char[right])) {
                let temp = char[left]
                char[left] = char[right]
                char[right] = temp

                left++
                right--
            }
        }

        return char.join('')

};
const s = "Test1ng-Leet=code-Q!"
console.log(reverseOnlyLetters(s));
