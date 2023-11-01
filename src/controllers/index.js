// 根据接收到的值调整数据
const {logToFile} = require("../common/log");
const {playSeries,playMovie} = require("./play");

function Main(data) {
    // logToFile(JSON.stringify(data));
    // 根据收到的事件分类来区分内容
    //播放电视
    // playSeries(data);
    // 播放电影
    playMovie(data)
    // 添加剧集
}

module.exports = {Main}