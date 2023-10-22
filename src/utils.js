export function calDaysLeft(dateString) {
    // today's date
    const today = new Date();

    // event start date
    const futureDate = new Date(dateString);

    // milliseconds between two days
    const timeDifference = futureDate - today;
    console.log(dateString);
    if (timeDifference > 0) {
        return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    } else {
        return null;
    }
}
