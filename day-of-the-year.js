function dayOfTheYear(date) {
    
    const year = date.getFullYear();
  
    const startOfYear = new Date(year, 0, 1);
  
    const difference = date - startOfYear;
    const output = Math.floor(difference / (1000 * 60 * 60 * 24));
  
    return output
  }
