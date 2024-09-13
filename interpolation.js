function interpolation({
    step = 0,    
    start = 0,    
    end = 0,       
    callback = () => {},  
    duration = 0, 
} = {}) {
    
    // Calculate the change (delta) between each step based on the total range (end - start)
    const delta = (end - start) / step;
    let current = start;
    
    let i = 0;
    
    // Set an interval that runs every (duration / step) milliseconds
    const timer = setInterval(() => {
        
        if (i < step) {
            // Call the callback function with the current value and elapsed time
            callback([current, (duration / step) * (i + 1)]);
            
            current += delta;       
            i++;
        } else {
            // If all steps are complete, stop the interval
            clearInterval(timer);
        }
        
    }, duration / step);  // The interval time is calculated by dividing the total duration by the number of steps
}
