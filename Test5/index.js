// Function to flatten a multidimensional array

const customArray = (arr) => {
  // Initialize an empty array to hold the array elements
  let result = [];

  // Define a helper function to perform the recursion
  function flatten(element) {
    // Check if the current element is an array
    if (Array.isArray(element)) {
      // If it is, iterate over each item in the array
      for (let item of element) {
        // Recursively flatten each item
        flatten(item);
      }
    } else {
      // If the current element is not an array, add it to the result
      result.push(element);
    }
  }

  // Start the flattening process with the input array
  flatten(arr);

  // Return the flattened array
  return result;
};

// TEST CASE 1:

const multi_dimension_arr = [
  [
    [
      [0, 2],
      [4, 5],
    ],
    [
      [7, 8],
      [9, 3],
    ],
  ],
  [
    [
      [10, 12],
      [14, 15],
    ],
    [
      [17, 18],
      [19, 13],
    ],
  ],
];

console.log(customArray(multi_dimension_arr));
