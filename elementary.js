function multiply(a, b) {
    let result = 0;
    const positiveB = Math.abs(b);
  
    for (let i = 0; i < positiveB; i++) {
      result += a;
    }
  
    // Adjust for negative b
    return b < 0 ? -result : result;
}
  
function divide(a, b) {
    if (b === 0) throw new Error("Division by zero");
  
    let result = 0;
    let absA = Math.abs(a);
    const absB = Math.abs(b);
  
    while (absA >= absB) {
      absA -= absB;
      result++;
    }
  
    // Adjust for negative results
    return (a < 0 && b > 0) || (a > 0 && b < 0) ? -result : result;
}

function modulo(a, b) {
    if (b === 0) throw new Error("Division by zero");
  
    let absA = Math.abs(a);
    const absB = Math.abs(b);
  
    while (absA >= absB) {
      absA -= absB;
    }
  
    // Adjust for negative results
    return a < 0 ? -absA : absA;
} 