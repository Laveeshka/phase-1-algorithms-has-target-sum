// function hasTargetSum(array, target) {
//   const len = array.length;
//   for (let i = 0; i < len; i++){
//     for (let j = i + 1; j < len; j++){
//       const sum = array[i] + array[j];
//       if (sum === target)
//         return true;
//     }
//   }
//   return false;
// }

//Solution 2
// function hasTargetSum(array, target){
// const trackedArray = []; //this array will track the elements that we have iterated over 
//   for (let i = 0; i < array.length; i++){
//     const difference = target - array[i]; 
//     if (trackedArray.includes(difference))
//       return true;
//     trackedArray.push(array[i]) //add the current element for tracking for the next iteration
//   }
//   return false;
// }

//Solution 3
function hasTargetSum(array, target){
  const trackedSet = new Set(); //this set will track the elements that we have iterated over 
    for (let i = 0; i < array.length; i++){
      const difference = target - array[i]; 
      if (trackedSet.has(difference))
        return true;
      trackedSet.add(array[i]) //add the current element for tracking for the next iteration
    }
    return false;
  }
  

/* 
  Write the Big O time complexity of your function here
  //SOLUTION 1
  This is the worst case scenario since we end up with  O(n²) complexity arising from the nested loop

  //SOLUTION 2
  Still O(n²) since Array.includes() has a time complexity of 0(n)!!
  On the other hand, Set.has() has a time complexity of 0(1) ... says Google
  Can we use a set instead for the tracked Array??

  //SOLUTION 3
  0(n) from the sole iteration
  Set.has() has a time complexity of 0(1)

*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  ------ SOLUTION 1 -------
  Use two loops
  First loop iterates over each element of the array with our trusted index i
  We have a nested loop (eek! for time and space complexity)
  The nested loop's index is offset by 1 to that of the first loop
  Why? - We want to compare the index at the preceeding index with every other element
  Once their sum matches the target, return true
  Otherwise, return false
  
  ---- SOLUTION 2 -------
  Create an empty array that will keep track of all the elements that we have previously traversed through
  Start looping through each element of the array
    Calculate the difference between the target and the current element
    Perform a check - does the tracking array include the difference? If yes, we have found the numbers which sum yield the target
    If not, we add the current element to the tracking array
  When the tracking array is full(has the same length of our array), we know that our array of numbers do not possess two numbers equating to the target sum

  ---- SOLUTION 3 -------
  Create an empty set that will keep track of all the elements that we have previously traversed through
  Start looping through each element of the array
    Calculate the difference between the target and the current element
    Perform a check - does the tracking set include the difference? If yes, we have found the numbers which sum yield the target
    If not, we add the current element to the tracking set
  When the tracking set is full(has the same length as our array), we know that our array of numbers do not possess two numbers equating to the target sum
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

