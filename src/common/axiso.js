const axios = require('axios');

// 发送POST请求
function sendPost(url, data) {
    return axios.post(url, data)
}

function sendGetImage(url) {
    return axios.get(url, {responseType: 'arraybuffer'})
}

module.exports = {sendPost, sendGetImage}