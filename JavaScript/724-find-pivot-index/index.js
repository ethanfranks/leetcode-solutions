/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
    let sum = 0;
    const runningSumArr = nums.map(num => sum += num);

    sum = 0;
    const reversedRunningSumArr = nums.reverse().map(num => sum += num);
    reversedRunningSumArr.reverse();
    
    for (let i = 0; i < nums.length; i++) {

        if (i == 0 && reversedRunningSumArr[i + 1] == 0 || nums.length == 1) {
            return 0;
        }

        if (i > 0 && i < nums.length - 1) {
            if (runningSumArr[i-1] == reversedRunningSumArr[i+1]) {
                return i;
            }
        } 
        
        if (i == nums.length - 1 && runningSumArr[i - 1] == 0) {
            return i;
        }
    }
    
    return -1;
};