let s = 'abcdeaadce'
let arr = s.split('')
console.log(arr);
// {}=>key value pairs
//[a,b,c,d,e]=>{'a':2,'b':2,'c':1,'d':1,'e':1}

let hashMap = {}

for (let i = 0; i < arr.length; i++) {
   if (!hashMap[arr[i]]) {
    hashMap[arr[i]] = 1
   }
   else{
    hashMap[arr[i]] +=1
   }
}

console.log(hashMap);
