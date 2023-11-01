const express = require('express');
const app = express();
const port = 888;

// 导入multer中间件
const multer = require('multer');
const {Main} = require("../controllers/main");
const {logToFile} = require("../common/log");
const upload = multer();

// 处理POST请求
app.post('/webhook', upload.none(), (req, res) => {
    const postData = JSON.parse(req.body.data);
    logToFile(`端口接收到消息：${JSON.stringify(postData)}`)
    Main(postData);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    Main({"Title":"新 16bit的感动(2023) - S01E04 在 Emby Server","Date":"2023-11-01T08:19:44.1372090Z","Event":"library.new","Item":{"Name":"S01E04","ServerId":"2240cf897563470792b631152eb15508","Id":"199","DateCreated":"2023-11-01T08:18:54.9328120Z","SortName":"S01E04","ExternalUrls":[],"Path":"D:\\anime\\16bit的感动(2023)\\S01E04.mp4","Taglines":[],"Genres":[],"FileName":"S01E04.mp4","RemoteTrailers":[],"ProviderIds":{},"IsFolder":false,"Type":"Episode","Studios":[],"GenreItems":[],"TagItems":[],"SeriesName":"16bit的感动(2023)","SeriesId":"198","ImageTags":{},"BackdropImageTags":[],"MediaType":"Video"},"Server":{"Name":"DESKTOP-S7DTKJP","Id":"2240cf897563470792b631152eb15508","Version":"4.7.14.0"}})
    // logToFile(`开始监听端口${port}`)
});