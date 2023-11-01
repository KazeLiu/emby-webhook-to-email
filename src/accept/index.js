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
    Main({
            "Title": "新 铃芽之旅 在 Emby Server",
            "Date": "2023-11-01T05:39:40.2501249Z",
            "Event": "library.new",
            "Item": {
                "Name": "铃芽之旅",
                "ServerId": "2240cf897563470792b631152eb15508",
                "Id": "103",
                "DateCreated": "2023-11-01T05:39:01.8339577Z",
                "SortName": "铃芽之旅",
                "ExternalUrls": [],
                "Path": "D:\\movie\\铃芽之旅.mp4",
                "Taglines": [],
                "Genres": [],
                "FileName": "铃芽之旅.mp4",
                "RemoteTrailers": [],
                "ProviderIds": {},
                "IsFolder": false,
                "ParentId": "101",
                "Type": "Movie",
                "Studios": [],
                "GenreItems": [],
                "TagItems": [],
                "ImageTags": {},
                "BackdropImageTags": [],
                "MediaType": "Video"
            },
            "Server": {"Name": "DESKTOP-S7DTKJP", "Id": "2240cf897563470792b631152eb15508", "Version": "4.7.14.0"}
        }
    )
    // logToFile(`开始监听端口${port}`)
});