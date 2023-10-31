const {urlImageToBase64} = require("./other");
const {server} = require("../../public/public");

async function returnPlayHtml(data) {
    let base64 = await urlImageToBase64(`${server.path}/emby/Items/${data.Item.SeriesId}/Images/Primary?tag=${data.Item.SeriesPrimaryImageTag}\``)
    return '';
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">  
    <title>Title</title>
</head>
<body>
<div style="text-align: left;color: #fff;">
    <img src="${base64}"
         style="height: 100vh;
         width: 100vw;
         position: fixed;
         left: 50vw;
         top: 0;
         object-fit: cover;
         transform: translateX(-50%) scale(1.1);
         filter: brightness(0.4) blur(10px);"/>
    <div style="position:fixed;
                padding: 30px;
                height: calc(100vh);
                overflow: auto;
                z-index:2;
                left: 0;
                top: 0;
                width: calc(100vw);">
        <div style="font-size: 0.8em;">开始播放</div>
        <div style="font-size: 2em;margin: 20px auto 5px auto;font-weight: 800">${data.Item.SeriesName}</div>
        <div style="font-size: 1em;margin: 10px auto;color:rgba(255,255,255,0.6);">第${data.Item.ParentIndexNumber}季，第${data.Item.IndexNumber}集</div>
        <div style="font-size: 1.3em;margin-bottom: 10px;font-weight: 400;color:rgba(255,255,255,0.8);">修学旅行！</div>
        <div style="font-size: 0.8em;margin: 10px 0;color: rgba(255,255,255,0.4);">
            樱丘高中3年级即将前往京都毕业旅行。由于规定要4人一组团体行动，因此轻音部成员也就顺理成章地编成一组。没想到唯与律从出发搭上新干线后就一直嬉闹个不停，让澪感到极度不安。
        </div>
        <img style="width:100%;" src="${base64}" alt="">
        <div style="display: flex;justify-content: space-between;font-size: 0.8em;margin: 20px auto;color: rgba(255,255,255,0.4)">
            <div>${data.User.Name} 于 ${data.Date} 开始使用 ${data.Session.Client} 观看</div>
        </div>
    </div>
</div>
</body>
</html>`
}

module.exports = {returnPlayHtml}