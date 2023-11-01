const {sendGetImage} = require("./axiso");

function urlImageToBase64(url) {
    return new Promise((r, j) => {
        sendGetImage(url).then(res => {
            let data = Buffer.from(res.data, 'binary').toString('base64');
            r(data);
        }).catch(data => j(data))
    })
}

function dateToString(date, isUtc) {
    if (isUtc && date) {
        const dateInUTC = new Date(date);
        const dateFormatter = new Intl.DateTimeFormat('en-US', {timeZone: 'Asia/Shanghai'});
        const date = dateFormatter.format(dateInUTC);
    }
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

module.exports = {urlImageToBase64, dateToString}