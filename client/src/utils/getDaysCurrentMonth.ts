export function getDatesForCurrentMonth() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth(); // Months are 0-indexed, so January is 0, February is 1, and so on.
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the number of days in the current month.

    const dateArray = [];

    for (let day = 1; day <= daysInMonth; day++) {
        dateArray.push(day.toString());
    }

    return dateArray;
}
