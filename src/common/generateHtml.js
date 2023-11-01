const {tmdb} = require("../../public/public");
const {dateToString} = require("./other");

function returnPlaySeriesHtml(data) {
    return `
     <div style="text-align: left; color: #fff;">
        <img src="${tmdb.imageBaseUrl + data.Tmdb.backdrop_path}" alt="封面" style="height: 100vh; width: 100vw; position: fixed; left: 50vw; top: 0; object-fit: cover; transform: translateX(-50%) scale(1.1); filter: brightness(0.4) blur(10px);">
        <div style="position: fixed; padding: 20px; height: calc(100vh); overflow: auto; z-index: 2; left: 0; top: 0; width: calc(100vw);">
            <div style="font-size: 0.8em; margin-left: 3px;">开始播放</div>
            <div style="font-size: 2em; margin: 10px auto; font-weight: 800;">${data.Item.SeriesName}</div>
            <div style="font-size: 1em; color: rgba(255, 255, 255, 0.6);">第${data.Item.ParentIndexNumber}季，第${data.Item.IndexNumber}集</div>
            <div style="font-size: 1em; font-weight: 400; color: rgba(255, 255, 255, 0.8); margin-top: 10px;">${data.Item.SortName}</div>
            <div style="font-size: 0.8em; margin: 0 0 10px 0; color: rgba(255, 255, 255, 0.4);">${data.Item.Overview}</div>
            <img src="${tmdb.imageBaseUrl + data.Tmdb.poster_path}" alt="封面" style="width: 100%;">
            <div style="display: flex; justify-content: space-between; font-size: 0.8em; margin: 10px auto 0 auto; color: rgba(255, 255, 255, 0.4);">
                <div>${data.User.Name} 于 ${dateToString(new Date(data.Date))} 开始使用 ${data.Session.Client} 观看</div>
            </div>
        </div>
    </div>
    `
}

function returnPlayMovieHtml(data) {
    return `
    <div style="text-align: left; color: #fff;">
        <img src="${tmdb.imageBaseUrl + data.Tmdb.backdrop_path}" alt="封面" style="height: 100vh; width: 100vw; position: fixed; left: 50vw; top: 0; object-fit: cover; transform: translateX(-50%) scale(1.1); filter: brightness(0.4) blur(10px);">
        <div style="position: fixed; padding: 20px; height: calc(100vh); overflow: auto; z-index: 2; left: 0; top: 0; width: calc(100vw);">
            <div style="font-size: 0.8em; margin-left: 3px;">开始播放</div>
            <div style="font-size: 2em; margin: 10px auto; font-weight: 800;">${data.Item.Name}</div>
            <div style="font-size: 1em; color: rgba(255, 255, 255, 0.6);">${data.Item.OriginalTitle}</div>
            ${data.Item.Taglines && data.Item.Taglines.length > 0 ? `<div style="font-size: 1em; font-weight: 400; color: rgba(255, 255, 255, 0.8); margin-top: 10px;">${data.Item.Taglines[0]}</div>` : ``}
            <div style="font-size: 0.8em; margin: 0 0 10px 0; color: rgba(255, 255, 255, 0.4);">${data.Item.Overview}</div>
            <img src="${tmdb.imageBaseUrl + data.Tmdb.poster_path}" alt="封面" style="width: 100%;">
            <div style="display: flex; justify-content: space-between; font-size: 0.8em; margin: 10px auto 0 auto; color: rgba(255, 255, 255, 0.4);">
                <div>${data.User.Name} 于 ${dateToString(new Date(data.Date))} 开始使用 ${data.Session.Client} 观看</div>
            </div>
        </div>
    </div>`
}

function returnAddSeriesHtml(data) {
    return `
        <div style="text-align: left; color: #fff;">
            <img src="${tmdb.imageBaseUrl + data.tvData.backdrop_path}" alt="封面" style="height: 100vh; width: 100vw; position: fixed; left: 50vw; top: 0; object-fit: cover; transform: translateX(-50%) scale(1.1); filter: brightness(0.4) blur(10px);">
            <div style="position: fixed; padding: 20px; height: calc(100vh); overflow: auto; z-index: 2; left: 0; top: 0; width: calc(100vw);">
                <div style="font-size: 0.8em; margin-left: 3px;">正在刮削：第${data.eData.season_number}季第${data.eData.episode_number}集</div>
                <div style="font-size: 2em; margin: 10px auto 0 auto; font-weight: 800;">${data.tvData.name}</div>
                <div style="font-size: 1em; margin-bottom: 10px; color: rgba(255, 255, 255, 0.8);">${data.tvData.original_name}</div>
                <div style="font-size: 1em; color: rgba(255, 255, 255, 0.6);"></div>
                <div style="font-size: 1em; font-weight: 400; color: rgba(255, 255, 255, 0.6); ">${data.eData.name}</div>
                <div style="font-size: 0.8em; margin: 0 0 10px 0; color: rgba(255, 255, 255, 0.4);">${data.eData.overview}</div>
                <img src="${tmdb.imageBaseUrl + data.tvData.poster_path}" alt="封面" style="width: 100%;">
                <div style="display: flex; justify-content: space-between; font-size: 0.8em; margin: 10px auto 0 auto; color: rgba(255, 255, 255, 0.4);">
                        <div>当前信息为搜索结果，不代表刮削的最终结果</div>
                    </div>
            </div>
        </div>`
}

function returnAddMovieHtml(data) {
    return `
    <div style="text-align: left; color: #fff;">
        <img src="${tmdb.imageBaseUrl + data.Tmdb.backdrop_path}" alt="封面" style="height: 100vh; width: 100vw; position: fixed; left: 50vw; top: 0; object-fit: cover; transform: translateX(-50%) scale(1.1); filter: brightness(0.4) blur(10px);">
        <div style="position: fixed; padding: 20px; height: calc(100vh); overflow: auto; z-index: 2; left: 0; top: 0; width: calc(100vw);">
            <div style="font-size: 0.8em; margin-left: 3px;">开始播放</div>
            <div style="font-size: 2em; margin: 10px auto; font-weight: 800;">${data.tvData.Name}</div>
            <div style="font-size: 1em; color: rgba(255, 255, 255, 0.6);">${data.Item.OriginalTitle}</div>
            ${data.Item.Taglines && data.Item.Taglines.length > 0 ? `<div style="font-size: 1em; font-weight: 400; color: rgba(255, 255, 255, 0.8); margin-top: 10px;">${data.Item.Taglines[0]}</div>` : ``}
            <div style="font-size: 0.8em; margin: 0 0 10px 0; color: rgba(255, 255, 255, 0.4);">${data.Item.Overview}</div>
            <img src="${tmdb.imageBaseUrl + data.Tmdb.poster_path}" alt="封面" style="width: 100%;">
            <div style="display: flex; justify-content: space-between; font-size: 0.8em; margin: 10px auto 0 auto; color: rgba(255, 255, 255, 0.4);">
                <div>${data.User.Name} 于 ${dateToString(new Date(data.Date))} 开始使用 ${data.Session.Client} 观看</div>
            </div>
        </div>
    </div>`
}

module.exports = {returnPlaySeriesHtml, returnPlayMovieHtml, returnAddSeriesHtml, returnAddMovieHtml}