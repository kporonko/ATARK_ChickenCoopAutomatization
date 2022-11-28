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

const checkHours = (hours: number) => {
    if (hours < 10)
        return (`0${hours}`)
    return hours;
}
const checkMinutes = (minutes: number) => {
    if (minutes < 10)
        return (`0${minutes}`)
    return minutes;
}
const checkSeconds = (seconds: number) => {
    if (seconds < 10)
        return (`0${seconds}`)
    return seconds;
}
