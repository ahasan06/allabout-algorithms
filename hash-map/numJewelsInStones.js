

var numJewelsInStones = function(jewels, stones) {
      const JewelsInStonesObj = {}
      for (let i = 0; i < stones.length; i++) {
        const char = stones[i]
        if (JewelsInStonesObj[char]!=null) {
            JewelsInStonesObj[char]+=1
        }
        else{
            JewelsInStonesObj[char] = 1
        }
      }

      let totalJewelsInStones = 0
      for (let i = 0; i < jewels.length; i++) {
        const char = jewels[i]
        if(JewelsInStonesObj[char]){
            totalJewelsInStones+=JewelsInStonesObj[char]
        }
      }
      return totalJewelsInStones
      
};
const jewels = "", stones = "aAAbbbb"
console.log(numJewelsInStones(jewels,stones));
