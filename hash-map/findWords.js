var findWords = function(words) {
    const keyboardRowMap = {
        q: 1, w: 1, e: 1, r: 1, t: 1, y: 1, u: 1, i: 1, o: 1, p: 1,
        a: 2, s: 2, d: 2, f: 2, g: 2, h: 2, j: 2, k: 2, l: 2,
        z: 3, x: 3, c: 3, v: 3, b: 3, n: 3, m: 3
    }
    let findWords = []
    for (const word of words) {
        const lowerCaseWord = word.toLowerCase();
        const rowIndexOfTheletter = keyboardRowMap[lowerCaseWord[0]];
        let findWordsInKeyBoardRows = lowerCaseWord.split('').every(char=>keyboardRowMap[char] === rowIndexOfTheletter)
        if (findWordsInKeyBoardRows) {
            findWords.push(word);
        }
    }
    return findWords
};

const words = ["Hello","Alaska","Dad","Peace"]
console.log(findWords(words));
