const {sendWXMessage} = require("../send/wxPush");
const {returnSeriesHtml, returnMovieHtml, returnAddSeriesHtml} = require("../common/generateHtml");
const {sendGetTMDB} = require("../common/axiso");
const {logToFile} = require("../common/log");

async function addSeries(data) {
    logToFile(`开始获取电视剧《${data.Item.SeriesName}》的信息`)
    // 通过正则匹配出第几季第几集
    // 提取 SeriesName，移除括号内的内容
    const seriesName = data.Item.SeriesName.replace(/\(([^)]+)\)|\s*/g, '');
    // 使用正则表达式提取 S 和 E 字段
    const match = data.Item.Name.match(/S(\d+)E(\d+)/);
    const S = match ? match[1] : '';
    const E = match ? match[2] : '';
    try {
        // 查询tmdb
        let tvDataList = await sendGetTMDB(`/search/tv?query=${seriesName}&language=zh-CN&page=1`);
        if (tvDataList.total_results > 0) {
            let tvData = tvDataList.results[0];
            logToFile(`开始获取电视剧《${data.Item.SeriesName}》中${data.Item.Name}的信息`)
            let eData = await sendGetTMDB(`/tv/${tvData.id}/season/${S}/episode/${E}?language=zh-CN`);
            let html = returnAddSeriesHtml({
                tvData,
                eData
            })
            sendWXMessage(`媒体库已添加《${tvData.name}》的${S}季${E}集:《${eData.name}》`, html)
        } else {
            // 没查找到对应剧集
        }
    } catch (e) {
        logToFile(`报错：${JSON.stringify(e)}`)
    }

}

function addMovie(data) {
    logToFile(`开始获取电影${data.Item.Name}的信息`)
    // 查询tmdb
    sendGetTMDB(`/movie/${data.Item.ProviderIds.Tmdb}?language=zh-CN`).then(tmdbTVData => {
        data.Tmdb = tmdbTVData;
        let html = returnAddMovieHtml(data)
        sendWXMessage(`开始播放《${data.Item.Name}》`, html)
    })
}

module.exports = {addSeries, addMovie}

