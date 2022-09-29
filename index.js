function hasTargetSum(array, target) {
  // Write your algorithm here
  const len = array.length;
  for (let i = 0; i < len; i++){
    for (let j = i + 1; j < len; j++){
      const sum = array[i] + array[j];
      if (sum === target)
        return true;
    }
  }
  return false;
}


/* 
  Write the Big O time complexity of your function here
  This is the worst case scenario since we end up with  O(n²) complexity arising from the nested loop
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  Use two loops
  First loop iterates over each element of the array with our trusted index i
  We have a nested loop (eek! for time and space complexity)
  The nested loop's index is offset by 1 to that of the first loop
  Why? - We want to compare the index at the preceeding index with every other element
  Once their sum matches the target, return true
  Otherwise, return false
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
