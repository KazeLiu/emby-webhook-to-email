const axios = require('axios');
const {tmdb, proxy} = require("../../public/public");
const {httpsOverHttp} = require("tunnel");

// 发送POST请求
function sendPost(url, data) {
    return axios.post(url, data)
}

function sendGetImage(url) {
    return axios.get(url, {responseType: 'arraybuffer'})
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
                j(res)
            }
        }).catch(res => {
            j(res)
        })
    })
}

module.exports = {sendPost, sendGetImage, sendGetTMDB}