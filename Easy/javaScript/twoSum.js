/* Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to 
target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1] 
*/


let nums = [2, 11, 6, 5, 3, 7, 15]
let target = 9

// function twoSum (nums, target) {
//     let container = []
//     for(i = 0; i < nums.length; i++) {
//         for(j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 container.push(i)
//                 container.push(j)
//             }
//         }
//     }
//     return container
// }

// function twoSum (nums, target) {
//     let container = []
//     for (i = 0; i < nums.length; i++) {
//         let difference = target - nums[i]
//         let indice = nums.indexOf(difference, i)
//         if (indice >= 0) {
//             container.push(i)
//             container.push(indice)
//             return container
//         }
//     }
//     return "There are no matches... :("
// }

// inefficient 0(N^2) exponential scalings in time 

const twoSum = (nums, target) => {
    let container = {}
    for (i = 0; i < nums.length; i++) {
        if (target - nums[i] in container) {
            return [container[target-nums[i]], i]
        }
        container[nums[i]] = i
        console.log(`${i}: `, container )
    }
}

// twoSum(nums,target)
console.log(twoSum(nums, target))