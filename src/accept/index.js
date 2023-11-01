const express = require('express');
const app = express();
const port = 888;

// 导入multer中间件
const multer = require('multer');
const {Main} = require("../controllers");
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
    // Main({"Title":"蓝芷怡-PC 在 Google Chrome Windows 上开始播放 铃芽之旅","Date":"2023-11-01T05:57:28.2783087Z","Event":"playback.start","User":{"Name":"蓝芷怡-PC","Id":"ac5936290ca848449b25f95b504b5238"},"Item":{"Name":"铃芽之旅","OriginalTitle":"すずめの戸締まり","ServerId":"2240cf897563470792b631152eb15508","Id":"103","DateCreated":"2023-11-01T05:39:01.0000000Z","SortName":"铃芽之旅","PremiereDate":"2022-11-10T16:00:00.0000000Z","ExternalUrls":[{"Name":"IMDb","Url":"https://www.imdb.com/title/tt16428256"},{"Name":"TheMovieDb","Url":"https://www.themoviedb.org/movie/916224"},{"Name":"TheTVDB","Url":"https://thetvdb.com/dereferrer/movie/331904"},{"Name":"Trakt","Url":"https://trakt.tv/search/tmdb/916224?id_type=movie"}],"Path":"D:\\movie\\铃芽之旅.mp4","OfficialRating":"PG","Overview":"生活在日本九州田舍的17岁少女・铃芽遇见了为了寻找“门”而踏上旅途的青年。追随着青年的脚步，铃芽来到了山上一片废墟之地，在这里静静伫立着一扇古老的门，仿佛是坍塌中存留的唯一遗迹。铃芽仿佛被什么吸引了一般，将手伸向了那扇门…  不久之后，日本各地的门开始一扇一扇地打开。据说，开着的门必须关上，否则灾祸将会从门的那一边降临于现世。  星星，夕阳，拂晓，误入之境的天空，仿佛溶解了一切的时间。在神秘之门的引导下，铃芽踏上了关门的旅途。","Taglines":["门的那一边，存在着一切的时间——"],"Genres":["动画","剧情","冒险","奇幻"],"CommunityRating":7.992,"FileName":"铃芽之旅.mp4","PlayAccess":"Full","ProductionYear":2022,"RemoteTrailers":[{"Url":"https://www.youtube.com/watch?v=cHI_O_kjmjk"}],"ProviderIds":{"Tmdb":"916224","Imdb":"tt16428256","Tvdb":"331904","EIDR":"10.5240/16B9-BDA5-203F-5E1E-3EEB-9","Official Website":"https://suzume-tojimari-movie.jp/","Wikipedia":"Suzume_(film)"},"IsFolder":false,"ParentId":"101","Type":"Movie","Studios":[{"Name":"CoMix Wave Films","Id":147},{"Name":"Story","Id":148},{"Name":"Lawson Entertainment","Id":149},{"Name":"East Japan Marketing & Communications","Id":150},{"Name":"voque ting","Id":151},{"Name":"KADOKAWA","Id":152},{"Name":"Aniplex","Id":153},{"Name":"TOHO","Id":154}],"GenreItems":[{"Name":"动画","Id":143},{"Name":"剧情","Id":144},{"Name":"冒险","Id":145},{"Name":"奇幻","Id":146}],"TagItems":[],"PrimaryImageAspectRatio":0.6666666666666666,"ImageTags":{"Primary":"71b0cac88e914ac1c1d58d430f4e8b35","Logo":"bf5d06852485e94d9170ca65f16226d8","Thumb":"a078f9cb2171e38757f5bef881193bd3"},"BackdropImageTags":["0f00575d22680e1ec5e450bfb8ac3d0d"],"MediaType":"Video"},"Server":{"Name":"DESKTOP-S7DTKJP","Id":"2240cf897563470792b631152eb15508","Version":"4.7.14.0"},"Session":{"RemoteEndPoint":"::1","Client":"Emby Web","DeviceName":"Google Chrome Windows","DeviceId":"e3503c2b-72aa-4d5f-afbe-328c2bc8afc5","ApplicationVersion":"4.7.14.0","Id":"bd1baa157f06fb6890430d5e868d281d"},"PlaybackInfo":{"PositionTicks":0,"PlaylistIndex":0,"PlaylistLength":1}})
    logToFile(`开始监听端口${port}`)
});