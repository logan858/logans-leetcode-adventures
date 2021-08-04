
/* checks to see if an integer is a palindrome: 

ex:  
input: 56
return: false

input: 121
return: true

*/

function isPalindrome (int) {
    let rev = int.toString().split("").reverse().join("")
  
    if( rev == int) return true
    else return false
  }
  
  console.log(isPalindrome(656))