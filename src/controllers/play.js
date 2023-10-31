const {sendWXMessage} = require("../send/wxPush");
const {server} = require("../../public/public");
const {returnPlayHtml} = require("../common/generateHtml");

async function playStar(play) {
   let html = await returnPlayHtml(play,)
    sendWXMessage(`开始播放 ${play.Item.SeriesName}`,html)
}

module.exports = {playStar}

