/*
Example 1:

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: l1 = [], l2 = []
Output: []
Example 3:

Input: l1 = [], l2 = [0]
Output: [0]
*/


function mergeTwoLists (list1, list2) {
    if (!list1) return list2
    if (!list2) return list1
  
    if (list1.val < list2.val) {
      list1.next = mergeTwoLists(list1.next, list2)
      return list1
    } else {
      list2.next = mergeTwoLists(list1, list2.next)
      return list2
    }
  }

