const express = require('express');
const {sendEmail} = require("../send");
const app = express();
const port = 888; // 选择一个端口
const bodyParser = require('body-parser');


app.use(bodyParser.json());
// 处理POST请求
app.post('/webhook', (req, res) => {
    debugger
    const postData = req.body; // 从请求体中获取JSON数据

    debugger
    // 在postData中可以访问请求中的各个字段
    const title = postData.Title;
    const description = postData.Description;
    // 其他字段以此类推

    // 做你想要的处理

    res.send('Data received successfully');
});

// 定义一个路由，用于处理接收请求
// app.get('/sedEmail', (req, res) => {
//     sendEmail().then(r => console.log(r))
// });

// 启动Express应用
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
