function split(str, separator) {
    let result = [];
    let startIndex = 0;
    
    while (true) {
      let index = str.indexOf(separator, startIndex);
      
      if (index === -1) {
        result.push(str.slice(startIndex));
        break;
      }
      
      result.push(str.slice(startIndex, index));
      startIndex = index + separator.length;
    }
    
    return result;
  }

  function join(array, separator) {
    let result = '';
    
    for (let i = 0; i < array.length; i++) {
      result += array[i];
      
      if (i < array.length - 1) {
        result += separator;
      }
    }
    
    return result;
  }
  