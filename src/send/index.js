const nodemailer = require("nodemailer");
const {userInfo} = require("../../public/userInfo");

// 使用async..await 创建执行函数
async function sendEmail({subject, html}) {
    // 创建Nodemailer传输器 SMTP 或者 其他 运输机制
    let transporter = nodemailer.createTransport({
        host: userInfo.host, // 第三方邮箱的主机地址
        secure: userInfo.secure, // true for 465, false for other ports
        auth: {
            user: userInfo.user, // 发送方邮箱的账号
            pass: userInfo.pass, // 邮箱授权密码
        },
    });

    // 定义transport对象并发送邮件
    let info = await transporter.sendMail({
        from: userInfo.from, // 发送方邮箱的账号
        to: userInfo.to, // 邮箱接受者的账号
        subject: "Kaze.liu", // Subject line
        html: "Thanks<b>Kaze Liu</b>", // html 内容, 如果设置了html内容, 将忽略text内容
    });
    console.log(info)
}

module.exports = {sendEmail}