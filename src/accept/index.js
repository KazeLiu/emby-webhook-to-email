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
    logToFile(`开始监听端口${port}`)
});
