function sunnySunday(date) {
    const days = Math.floor((date.getTime() - new Date(0).getTime()) / (24 * 60 * 60 * 1000));
  
    const noSundays = days - Math.floor(days / 7);
  
    const index = noSundays % 6;
  
    const dy = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dy[index];
  }

