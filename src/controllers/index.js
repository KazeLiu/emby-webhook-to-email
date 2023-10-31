// 根据接收到的值调整数据
const {logToFile} = require("../common/log");
const {playStar} = require("./play");

function Main(data) {
    logToFile(JSON.stringify(data));
    // playStar(data);
}

module.exports = {Main}