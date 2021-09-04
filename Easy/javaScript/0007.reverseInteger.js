/*Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0
*/

function reverse (int) {
    let reved = parseFloat(int.toString().split('').reverse().join('')) 
    //0x7fff... is the max 32 bit int value
    if (reved > 0x7fffffff) {
        return 0
    }
    //math.sign adds the negative symbol back to the number
    return reved * Math.sign(int)
  }
  