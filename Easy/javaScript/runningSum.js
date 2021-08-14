/* 

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]

*/

function runningSum (nums) {
    let runningTotal = 0
    let finishedArr = []
  
    for (i = 0; i < nums.length; i++) {
      runningTotal += nums[i]
      finishedArr[i] = runningTotal
    }
    return finishedArr
  }