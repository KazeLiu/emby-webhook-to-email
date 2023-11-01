const {sendWXMessage} = require("../send/wxPush");
const {returnPlaySeriesHtml,returnPlayMovieHtml} = require("../common/generateHtml");
const {sendGetTMDB} = require("../common/axiso");
const {logToFile} = require("../common/log");

function playSeries(data) {
    // 查询tmdb
    sendGetTMDB(`/search/tv?query=${data.Item.SeriesName}&first_air_date_year=${data.Item.ProductionYear}&language=zh-CN&page=1`).then(tmdbTVData => {
        if (tmdbTVData.total_results > 0) {
            data.Tmdb = tmdbTVData.results[0];
            let html = returnPlaySeriesHtml(data)
            sendWXMessage(`开始播放《${data.Item.SeriesName}》的第${data.Item.ParentIndexNumber}季第${data.Item.IndexNumber}集：《${data.Item.SortName}》`, html)
        }
    })
}

function playMovie(data) {
    // 查询tmdb
    sendGetTMDB(`/movie/${data.Item.ProviderIds.Tmdb}?language=zh-CN`).then(tmdbTVData => {
        data.Tmdb = tmdbTVData;
        let html = returnPlayMovieHtml(data)
        sendWXMessage(`开始播放《${data.Item.Name}》`, html)
    })
}


module.exports = {playSeries, playMovie}

