const {urlImageToBase64, dateToString} = require("./other");
const {tmdb} = require("../../public/public");

function returnPlaySeriesHtml(data) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">  
    <title>Title</title>
</head>
<body>
<div style="text-align: left;color: #fff;">
    <img src="${tmdb.imageBaseUrl + data.Tmdb.poster_path}"
     alt="封面"
         style="height: 100vh;
         width: 100vw;
         position: fixed;
         left: 50vw;
         top: 0;
         object-fit: cover;
         transform: translateX(-50%) scale(1.1);
         filter: brightness(0.4) blur(10px);"/>
    <div style="position:fixed;
                padding: 20px;
                height: calc(100vh);
                overflow: auto;
                z-index:2;
                left: 0;
                top: 0;
                width: calc(100vw);">
        <div style="font-size: 0.8em;">开始播放</div>
        <div style="font-size: 2em;margin: 10px auto;font-weight: 800">${data.Item.SeriesName}</div>
        <div style="font-size: 1em;margin-bottom: 20px;color:rgba(255,255,255,0.6);">第${data.Item.ParentIndexNumber}季，第${data.Item.IndexNumber}集</div>
        <div style="font-size: 1em;font-weight: 400;color:rgba(255,255,255,0.8);">${data.Item.SortName}</div>
        <div style="font-size: 0.8em;margin: 10px 0;color: rgba(255,255,255,0.4);">${data.Item.Overview}</div>
        <img style="width:100%;" src="${tmdb.imageBaseUrl + data.Tmdb.poster_path}" alt="封面">
        <div style="display: flex;justify-content: space-between;font-size: 0.8em;margin: 20px auto 0 auto;color: rgba(255,255,255,0.4)">
            <div>${data.User.Name} 于 ${dateToString(new Date(data.Date))} 开始使用 ${data.Session.Client} 观看</div>
        </div>
    </div>
</div>
</body>
</html>`
}

module.exports = {returnPlaySeriesHtml}