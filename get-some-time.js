function firstDayWeek(week, year) {
    
    year = parseInt(year);
    let firstDayOfYear = new Date(year, 0, 1); // January 1st
    let dayOfWeek = firstDayOfYear.getDay();
    let daysToAdd = (dayOfWeek === 0 ? 1 : 8 - dayOfWeek); // If Jan 1st is Sunday (0), add 1 day; otherwise, add (8 - dayOfWeek)

    let firstMonday = new Date(year, 0, 1 + daysToAdd);

    // Calculate the date of the first day of the specified week
    let firstDayOfWeek = new Date(firstMonday);
    firstDayOfWeek.setDate(firstMonday.getDate() + (week - 1) * 7);

    // Check if the calculated date falls in the previous year
    if (firstDayOfWeek.getFullYear() < year) {
        // Return January 1st of the specified year if the start of the week is in the previous year
        return `01-01-${year}`;
    }

    // Format the date as "dd-mm-yyyy"
    let day = String(firstDayOfWeek.getDate()).padStart(2, '0');
    let month = String(firstDayOfWeek.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    let formattedDate = `${day}-${month}-${firstDayOfWeek.getFullYear()}`;

    return formattedDate;
}
