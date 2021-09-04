/* 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/


const strs = ["flower", "flow", "flight"] 

function longestCommonPrefix (strs) {
    let shortest = strs.reduce((x, y) =>  x.length <= y.length ? x : y)
    let commonPref = ""
  
    for(i = 0; i < shortest.length; i++) {
      if (strs.every((ele) => shortest[i] == ele[i])) {
        commonPref += shortest[i]
      } else {
        return commonPref
      }
    }
    return commonPref
  } 
  
  console.log(longestCommonPrefix(strs))