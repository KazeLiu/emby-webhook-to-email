const {urlImageToBase64, dateToString} = require("./other");
const {tmdb} = require("../../public/public");
const htmlStyle = `<style>
        .body {
            text-align: left;
            color: #fff;
        }

        .background-image {
            height: 100vh;
            width: 100vw;
            position: fixed;
            left: 50vw;
            top: 0;
            object-fit: cover;
            transform: translateX(-50%) scale(1.1);
            filter: brightness(0.4) blur(10px);
        }

        .content {
            position: fixed;
            padding: 20px;
            height: calc(100vh);
            overflow: auto;
            z-index: 2;
            left: 0;
            top: 0;
            width: calc(100vw);
        }

        .start-text {
            font-size: 0.8em;
            margin-left: 3px;
        }

        .series-title,.series-title-movie {
            font-size: 2em;
            margin: 10px auto;
            font-weight: 800;
        }
        
        .series-title-movie{
            margin-bottom: 0;
        }

        .season-episode,.season-originalTitle {
            font-size: 1em;
            color: rgba(255, 255, 255, 0.6);
        }
        
        .season-originalTitle{
            margin-bottom: 10px;
        }

        .sort-name,.tag-lines {
            font-size: 1em;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.8);
        }

        .overview {
            font-size: 0.8em;
            margin: 0 0 10px 0;
            color: rgba(255, 255, 255, 0.4);
        }

        .cover-image {
            width: 100%;
        }

        .viewer-info {
            display: flex;
            justify-content: space-between;
            font-size: 0.8em;
            margin: 20px auto 0 auto;
            color: rgba(255, 255, 255, 0.4);
        }
    </style>`

function returnPlaySeriesHtml(data) {
    return `${htmlStyle}
    <div class="body">
        <img class="background-image" src="${tmdb.imageBaseUrl + data.Tmdb.backdrop_path}" alt="封面">
        <div class="content">
            <div class="start-text">开始播放</div>
            <div class="series-title">${data.Item.SeriesName}</div>
            <div class="season-episode">第${data.Item.ParentIndexNumber}季，第${data.Item.IndexNumber}集</div>
            <div class="sort-name">${data.Item.SortName}</div>
            <div class="overview">${data.Item.Overview}</div>
            <img class="cover-image" src="${tmdb.imageBaseUrl + data.Tmdb.poster_path}" alt="封面">
            <div class="viewer-info">
                <div>${data.User.Name} 于 ${dateToString(new Date(data.Date))} 开始使用 ${data.Session.Client} 观看</div>
            </div>
        </div>
    </div>`
}

function returnPlayMovieHtml(data) {
    return `${htmlStyle}
    <div class="body">
        <img class="background-image" src="${tmdb.imageBaseUrl + data.Tmdb.backdrop_path}" alt="封面">
        <div class="content">
            <div class="start-text">开始播放</div>
            <div class="series-title-movie">${data.Item.Name}</div>
            <div class="season-originalTitle">${data.Item.OriginalTitle}</div>
            ${data.Item.Taglines&&data.Item.Taglines.length>0?`<div class="tag-lines">${data.Item.Taglines[0]}</div>`:``}
            <div class="overview">${data.Item.Overview}</div>
            <img class="cover-image" src="${tmdb.imageBaseUrl + data.Tmdb.poster_path}" alt="封面">
            <div class="viewer-info">
                <div>${data.User.Name} 于 ${dateToString(new Date(data.Date))} 开始使用 ${data.Session.Client} 观看</div>
            </div>
        </div>
    </div>`
}

module.exports = {returnPlaySeriesHtml, returnPlayMovieHtml}