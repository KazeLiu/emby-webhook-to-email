const axios = require('axios');

// 发送POST请求
function sendPost(url, data) {
    return axios.post(url, data)
}

module.exports = {sendPost}