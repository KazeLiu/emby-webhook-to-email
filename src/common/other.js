function dateToString(date) {
    const currentDate = date ?? new Date();
    const year = currentDate.getFullYear(); // 年
    const month = formatTwoDigits(currentDate.getMonth() + 1);
    const day = formatTwoDigits(currentDate.getDate());
    const hours = formatTwoDigits(currentDate.getHours());
    const minutes = formatTwoDigits(currentDate.getMinutes());
    const seconds = formatTwoDigits(currentDate.getSeconds());
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

function formatTwoDigits(number) {
    return number < 10 ? `0${number}` : number.toString();
}

module.exports = {dateToString}