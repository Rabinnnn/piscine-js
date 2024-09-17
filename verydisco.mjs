#!/usr/bin/env node

// Function to "disco-fy" a single word
function veryDisco(word) {
    const mid = Math.ceil(word.length / 2); 
    const firstHalf = word.slice(0, mid);  
    const secondHalf = word.slice(mid);   
    return secondHalf + firstHalf;        
}
  
  // Get the command line argument (the word/sentence passed)
  const args = process.argv.slice(2); // First two elements are node and script names
  
  if (args.length === 0) {
    console.log('Please provide a word or sentence to make very disco.');
    process.exit(1); 
  }
  
  const input = args.join(' '); // Join all command line arguments as a single string
  
  // Split the input into words, apply the "very disco" transformation to each word, and join them back into a sentence
  const result = input
    .split(' ')           
    .map(veryDisco)        
    .join(' ');            
  
  console.log(result + ' (🕺🏼)');
  