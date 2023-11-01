const axios = require('axios');
const {tmdb, proxy} = require("../../public/public");
const {httpsOverHttp} = require("tunnel");
const {logToFile} = require("./log");

// 发送POST请求
function sendPost(url, data) {
    return axios.post(url, data)
}

function sendGetTMDB(url) {
    return new Promise((r, j) => {
        axios.get(tmdb.baseUrl + url, {
            headers: {
                accept: 'application/json',
                Authorization: tmdb.authorization
            },
            httpsAgent: httpsOverHttp({
                proxy: proxy,
            })
        }).then(res => {
            if (res.status === 200) {
                r(res.data)
            } else {
                logToFile(`请求 ${url} 返回出错：${JSON.stringify(res)}`)
                j(res)
            }
        }).catch(res => {
            logToFile(`请求 ${url} 程序出错：${JSON.stringify(res)}`)
            j(res)
        })
    })
}

module.exports = {sendPost, sendGetTMDB}