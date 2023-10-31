const {sendGetImage} = require("./axiso");

function urlImageToBase64(url) {
    return new Promise((r, j) => {
        sendGetImage(url).then(res => {
            let data = Buffer.from(res.data, 'binary').toString('base64');
            r(data);
        }).catch(data => j(data))
    })
}

module.exports = {urlImageToBase64}