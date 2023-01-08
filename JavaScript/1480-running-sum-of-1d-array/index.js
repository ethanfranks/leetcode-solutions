/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {

    const runningSumArr = nums.map((num, index) => {
        let sum = num;
        for (let i = index - 1; i >= 0; i--) {
            sum += nums[i];
        }
        return sum;
    })

    return runningSumArr;
};