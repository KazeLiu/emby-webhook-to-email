const fs = require('fs');
const {dateToString} = require("./other");

function logToFile(logText) {
    const logLine = `${dateToString()} ：${logText}\n`;
    // 日志文件的路径
    const logFilePath = '../../console.log'; // 替换成你的日志文件路径
    // 追加到日志文件
    fs.appendFile(logFilePath, logLine, (err) => {
        if (err) {
            console.error(`Error writing to log file: ${err}`);
        } else {
            console.log(`Log written: ${logLine}`);
        }
    });
}

module.exports =  {logToFile}
