const express = require('express');
const app = express();
const port = 888;

// 导入multer中间件
const multer = require('multer');
const {Main} = require("../controllers");
const {returnPlayHtml} = require("../common/generateHtml");
const upload = multer();

// 处理POST请求
app.post('/webhook', upload.none(), (req, res) => {
    // req.body 现在应该包含JSON数据
    const postData = JSON.parse(req.body.data);
    Main(postData);
    return true
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});