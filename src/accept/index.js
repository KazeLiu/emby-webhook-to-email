const express = require('express');
const app = express();


// 导入multer中间件
const multer = require('multer');
const {Main} = require("../controllers/main");
const {logToFile} = require("../common/log");
const {port} = require("../../public/public");
const upload = multer();

// 处理POST请求
app.post('/webhook', upload.none(), (req, res) => {
    const postData = JSON.parse(req.body.data);
    logToFile(`端口接收到消息：${JSON.stringify(postData)}`)
    if (postData.Title === 'Test Notification') {
        res.end();
    }
    Main(postData);
    res.end(); // 不需要传递参数
});

app.get('/test', (req, res) => {
    res.end("Hello Node.js");
});

app.listen(port, () => {
    Main({"Title":"新 16bit 的感动 ANOTHER LAYER - S01E05 - [ANi] 16bit 的感動 ANOTHER LAYER - 05 [1080P][Baha][WEB-DL][AAC AVC][CHT] 在 Emby Server","Date":"2023-11-02T09:12:38.8540231Z","Event":"library.new","Item":{"Name":"S01E05 - [ANi] 16bit 的感動 ANOTHER LAYER - 05 [1080P][Baha][WEB-DL][AAC AVC][CHT]","ServerId":"df8fe115a7f942a0a5c20aab321f43ab","Id":"764903","DateCreated":"2023-11-02T08:45:31.0735698Z","SortName":"S01E05 - [ANi] 16bit 的感動 ANOTHER LAYER - 05 [1080P][Baha][WEB-DL][AAC AVC][CHT]","ExternalUrls":[],"Path":"E:\\follow anime\\16bit的感动\\S01E05 - [ANi] 16bit 的感動 ANOTHER LAYER - 05 [1080P][Baha][WEB-DL][AAC AVC][CHT].mp4","Taglines":[],"Genres":[],"FileName":"S01E05 - [ANi] 16bit 的感動 ANOTHER LAYER - 05 [1080P][Baha][WEB-DL][AAC AVC][CHT].mp4","RemoteTrailers":[],"ProviderIds":{},"IsFolder":false,"Type":"Episode","Studios":[],"GenreItems":[],"TagItems":[],"SeriesName":"16bit 的感动 ANOTHER LAYER","SeriesId":"651293","SeriesPrimaryImageTag":"6c456f05c2ec5676d219060074c7370c","ImageTags":{},"BackdropImageTags":[],"MediaType":"Video"},"Server":{"Name":"蓝芷怡 - Emby","Id":"df8fe115a7f942a0a5c20aab321f43ab","Version":"4.7.14.0"}})
    logToFile(`开始监听端口${port}`)
});
