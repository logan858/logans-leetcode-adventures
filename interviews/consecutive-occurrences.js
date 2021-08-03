/* this is a problem I received as part of an interview that gave me some pause in the moment.  

The challenge is to count the number of consecutive occurrences of a given substring within a larger string, and return that count

EX: 

const string = "ababbabababefacbaab"
const subString = "ab"

returns: 3

*/

const string = "ababbabababefacbaabababab"
const subString = "ab"

function crossover (str, substr) {
  let highestOccurrence = 0 

  for (i = 0; i < str.length; i++) {
    let tempOccurrence = 0
    if (str.substring(i, i + substr.length) == substr) {
      tempOccurrence += 1

      let j = i
      while (str.substring(j + substr.length, j + substr.length * 2) == substr) {
        tempOccurrence += 1
        j += substr.length
      }
      if (tempOccurrence > highestOccurrence) {
        highestOccurrence = tempOccurrence
      }


    }
  }
  return highestOccurrence
}

console.log(crossover(string, subString))

// not a terribly efficient solution however, must re-examine more efficient methods