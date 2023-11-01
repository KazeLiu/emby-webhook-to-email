// 根据接收到的值调整数据
const {playSeries, playMovie} = require("./play");

function Main(data) {
    // 根据收到的事件分类来区分内容
    if (data.Event === "playback.start") {
        if (data.Item.Type === "Movie") {
            // 播放电影
            playMovie(data)
        }
        if (data.Item.Type === "Episode") {
            // 播放剧集
            playSeries(data)
        }
    }

    // 添加剧集
}

module.exports = {Main}