export const getDate = (feedDate: string) => {
    let date = new Date(feedDate);
    return `${date.getDate()}.${date.getMonth()}.${date.getUTCFullYear()}`
}
export const getTime = (feedDate: string) => {
    let date = new Date(feedDate);
    let hours = date.getHours();
    let minutes = date.getUTCMinutes();
    let seconds = date.getSeconds();

    return `${checkHours(hours)}:${checkMinutes(minutes)}:${checkSeconds(seconds)}`;
}

export const checkHours = (hours: number) => {
    if (hours < 10)
        return (`0${hours}`)
    return hours;
}
export const checkMinutes = (minutes: number) => {
    if (minutes < 10)
        return (`0${minutes}`)
    return minutes;
}
export const checkSeconds = (seconds: number) => {
    if (seconds < 10)
        return (`0${seconds}`)
    return seconds;
}


export function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
}

export function convertMsToTime(milliseconds: number) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    // // 👇️ If you don't want to roll hours over, e.g. 24 to 00
    // // 👇️ comment (or remove) the line below
    // // commenting next line gets you `24:00:00` instead of `00:00:00`
    // // or `36:15:31` instead of `12:15:31`, etc.
    // hours = hours % 24;

    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
        seconds,
    )}`;
}