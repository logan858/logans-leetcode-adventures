/* Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
*/

let s = ""

const lengthOfLongestSubstring = (str) => {
    let count = 0
    let container = []
    for (i = 0; i < str.length; i++) {
        if (container.indexOf(x => x === str[i]) >= 0) {
            if ( count < container.length) {
              count = container.length
            }
            container = []
        }
        container.push(str[i])
    }
    return count
}

console.log(lengthOfLongestSubstring(s))

// O(n^2), quadratically increases with for loop x indexOf