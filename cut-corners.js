function round(number) {
    const isNegative = number < 0;
    const integerPart = parseInt(number);
    const decimalPart = number - integerPart;
    return isNegative ? (decimalPart < -0.5 ? integerPart - 1 : integerPart) : (decimalPart >= 0.5 ? integerPart + 1 : integerPart);
  }
  
  function ceil(number) {
    const isNegative = number < 0;
    const integerPart = parseInt(number);
    return isNegative ? integerPart : integerPart + 1;
  }
  
  function floor(number) {
    const isNegative = number < 0;
    const integerPart = parseInt(number);
    return isNegative ? integerPart - 1 : integerPart;
  }
  
  function trunc(number) {
    const integerPart = parseInt(number);
    return integerPart;
  }
  
 // const nums = [3.7, -3.7, 3.1, -3.1];
  /*console.log(nums.map(round)); // [ 4, -4, 3, -3 ]
  console.log(nums.map(floor)); // [ 3, -4, 3, -4 ]
  console.log(nums.map(trunc)); // [ 3, -3, 3, -3 ]
  console.log(nums.map(ceil));  // [ 4, -3, 4, -3 ] */