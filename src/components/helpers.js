export function getTime(timestamp) {
    let time = new Date(timestamp * 1000);
    return formatTime(time);
}

export function formatTime(time, utc) {
    let hours = time.getHours();
    let minutes = time.getMinutes();

    if (utc) {
        hours = time.getHours() + utc;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return `${hours}:${minutes}`
}