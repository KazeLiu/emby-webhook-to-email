const {logToFile} = require("../common/log");
const {sendWXMessage} = require("../send/wxPush");

function restartServer() {
    logToFile(`得到重启的信息`)
    sendWXMessage(`需要重启Emby Server`, '需要重启Emby Server', 1)
}

function upDateServer() {
    logToFile(`得到更新的信息`)
    sendWXMessage(`需要更新Emby Server`, '需要更新Emby Server', 1)
}


function otherSend(data) {
    logToFile(`得到未归类的消息`)
    sendWXMessage(data.Title, JSON.stringify(data), 1)
}

module.exports = {restartServer, upDateServer, otherSend}