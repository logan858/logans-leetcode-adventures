/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

*/

const matches = {
    "(":")",
    "{":"}",
    "[":"]"
}

function isValid (str) {
    let openers = []
    for (i = 0; i < str.length; i++) {
        if (matches.hasOwnProperty(str[i])) {
            openers.push(str[i])
        } else {
            let closers = openers.pop()
            if(str[i] !== matches[closers]) {
                return false
            }
        }
    }
    if (openers.length !== 0) {
        return false
    }
    return true
}

/* decent efficiency in terms of speed.  