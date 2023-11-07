### 这是一个依据Emby中接收webhook推送的插件
使用前需要在根目录添加文件夹public，里面添加一个public.js，内容如下
``` javascript
/**
 * 邮件发送使用的信息
 * @type {{pass: string, host: string, from: string, to: string, secure: boolean, user: string}}
 */
const emailInfo = {
    host: "smtp.163.com",// 第三方邮箱的主机地址
    secure: true,// SSL开启 端口默认465, false在createTransport就加一个port
    user: '',
    pass: '',
    from: '',
    to: '',
}

// 监听的端口
const port = 8095;

/**
 * 微信推送接受的信息 用的第三方 WxPusher 免费 自己去注册
 * 因为我只发给我自己 所以在send/wxPush中有一个wxPush.lzyUID，这个ID需要使用自己微信的
 * @type {{pass: string, host: string, from: string, to: string, secure: boolean, user: string}}
 */
const wxPush = {
    url: 'https://wxpusher.zjiecode.com/api/send/message',
    token: '',
}

/**
 * tmdb的数据
 * @type {{authorization: string}}
 */
const tmdb = {
    baseUrl: 'https://api.themoviedb.org/3',
    // imageBaseUrl: 'https://image.tmdb.org/t/p/original',
    imageBaseUrl:'https://image.tmdb.org/t/p/w600_and_h900_bestv2', // 图片的baseurl用原图下载速度太慢了，手机用这个刚刚好
    authorization: ''
}

/**
 * 代理 tmdb访问有问题 代理必须使用 以后再改可以直连可以代理
 * @type {{port: number, host: string}}
 */
const proxy = {
    host: '127.0.0.1',
    port: 7890,
}

module.exports = {
    port, emailInfo, wxPush, tmdb, proxy
}
```
安装nodejs之后，直接在cmd里面输入即可打开，路径可能需要修改，后期再完善，也可以用pm2后台驻留
```
node accept/index.js
```