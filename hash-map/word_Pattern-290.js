

var wordPattern = function(pattern, s) {
    
    const words = s.split(' ');
    const hashPatternToWord = {};
    const hashWordToPattern = {};
    
    for (let i = 0; i < words.length; i++) {

        const patChar = pattern[i]
        const word = words[i]

        if (hashPatternToWord[patChar] && hashPatternToWord[patChar] !==word ) {
            return false
        }
        if (hashWordToPattern) {
            
        }

        
    }

    

    
};

const pattern = "abba", s = "dog cat cat dog"
console.log(wordPattern(pattern,s));
