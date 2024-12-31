export function getTimeAndDate(dt) {
    const date = new Date(dt * 1000);


    // Extract day name
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[date.getUTCDay()]; // getUTCDay() returns day index (0 for Sunday, 1 for Monday, etc.)


    // Combine date and time
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();
    return {
        time: formattedTime,
        date: formattedDate,
        day: dayName
    }
}