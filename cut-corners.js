function round(num) {
  let negative = false;
  if (num < 0) {
      negative = true;
      num = -num;
  }
  let count = 0;

  // Subtract 1 from num until it's between 0 and 1 (inclusive of 0, exclusive of 1)
  while (!(num < 1 && num > -1)) {
      num -= 1;
      count++;
  }
  // Determine whether to round up or down
  if (num < 0.5) {
      if (negative) {
          return -count; // Round down for negative numbers
      } else {
          return count;  // Round down for positive numbers
      }
  } else {
      if (negative) {
          return -count - 1; // Round up for negative numbers (more negative)
      } else {
          return count + 1;  // Round up for positive numbers
      }
  }
}

function floor(num) {
  let negative = false;
  if (num < 0) {
      negative = true;
      num = -num;
  }
  let numCopy = num;
  let count = 0;
  while (!(numCopy < 1 && numCopy > -1)) {
      numCopy -= 1;
      count++;
  }
  // If the original number was negative, adjust the result accordingly
  if (negative) {
      return -count - 1;
  } else {
      return count;
  }
}

function ceil(num) {
  if (!num) return 0;
  let negative = false;
  if (num < 0) {
      negative = true;
      num = -num; // Make the number positive for easier manipulation
  }
  let numCopy = num;
  let count = 0;
  // Decrease numCopy by 1 until it's less than 1 but not negative
  while (!(numCopy < 1 && numCopy >= 0)) {
      numCopy -= 1;
      count++;
  }
  // If the number was negative, return the negated count
  if (negative) {
      return -count;
  } else {
    // Otherwise, return the count + 1 to round up
      return count + 1;
  }
}

function trunc(num) {
  let count = 0;
  // If the number is greater than a large value, subtract that value
  if (num > 0xfffffffff) {
      num -= 0xfffffffff;
      count += 0xfffffffff;
  }
  let negative = false;
  if (num < 0) {
      negative = true;
      num = -num;
  }
  let numCopy = num;
  // Subtract 1 from numCopy until it's between 0 and 1 (exclusive of both 0 and 1)
  while (!(numCopy < 1 && numCopy > -1)) {
      numCopy -= 1;
      count++;
  }
  if (negative) {
      return -count;
  }
  return count;
}

  
 /* const nums = [3.7, -3.7, 3.1, -3.1];
  console.log(nums.map(round)); // [ 4, -4, 3, -3 ]
  console.log(nums.map(floor)); // [ 3, -4, 3, -4 ]
  console.log(nums.map(trunc)); // [ 3, -3, 3, -3 ]
  console.log(nums.map(ceil));  // [ 4, -3, 4, -3 ] */