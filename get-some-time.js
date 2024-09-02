function firstDayWeek(week, year) {
    const firstDayOfYear = new Date(year, 0, 1);
  
    // Adjust the first day of the year if the week starts in the previous year
    while (firstDayOfYear.getDay() !== 1) {
      firstDayOfYear.setDate(firstDayOfYear.getDate() - 1);
    }
  
    // Calculate the first day of the specified week
    const firstDayOfGivenWeek = new Date(firstDayOfYear);
    firstDayOfGivenWeek.setDate(firstDayOfYear.getDate() + (week - 1) * 7);
  
    // If the first day of the week is in the previous year, return the first day of the specified year
    if (firstDayOfGivenWeek.getFullYear() !== year) {
      return firstDayOfYear.toISOString().slice(0, 10);
    }
  
    return firstDayOfGivenWeek.toISOString().slice(0, 10);
  }
  