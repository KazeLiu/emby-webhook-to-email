// 根据接收到的值调整数据
const {playSeries, playMovie} = require("./playMedia");
const {addSeries, addMovie} = require("./addMedia");
const {restartServer, otherSend} = require("./serverOther");

function Main(data) {
    // 根据收到的事件分类来区分内容
    if (data.Event === "playback.start" || data.Event === "playback.pause" || data.Event === "playback.stop") {
        let playText = "";
        switch (data.Event) {
            case "playback.start":
                playText = "开始播放"
                break;
            case "playback.pause":
                playText = "暂停"
                break;
            case "playback.stop":
                playText = "播放完毕"
                break;
        }
        if (data.Item.Type === "Movie") {
            // 播放电影
            playMovie(data, playText)
        }
        if (data.Item.Type === "Episode") {
            // 播放剧集
            playSeries(data, playText)
        }
    } else if (data.Event === "library.new") {
        // 添加新媒体
        if (data.Item.Type === "Movie") {
            // 添加电影
            addMovie(data)
        }
        if (data.Item.Type === "Episode") {
            // 添加剧集
            addSeries(data)
        }
    } else if (data.Event === "system.serverrestartrequired") {
        restartServer();
    } else if (data.Event === "system.updateavailable") {
        upDateServer();
    }else{
        otherSend(data);
    }
    // 添加剧集
}

module.exports = {Main}