// let play = {
//     "Title": "蓝芷怡-PC 在 Google Chrome Windows 上开始播放 Yuri Is My Job! - S1, Ep2 - みなさんでお給仕を始めましょう？",
//     "Date": "2023-10-30T09:02:16.4668208Z",
//     "Event": "playback.start",
//     "User": {
//         "Name": "蓝芷怡-PC",
//         "Id": "ac5936290ca848449b25f95b504b5238"
//     },
//     "Item": {
//         "Name": "みなさんでお給仕を始めましょう？",
//         "ServerId": "2240cf897563470792b631152eb15508",
//         "Id": "24",
//         "DateCreated": "2023-10-29T08:11:34.0000000Z",
//         "SortName": "みなさんてお給仕を始めましょう？",
//         "PremiereDate": "2023-04-12T16:00:00.0000000Z",
//         "ExternalUrls": [
//             {
//                 "Name": "TheTVDB",
//                 "Url": "https://thetvdb.com/?tab=episode&id=9704097"
//             }
//         ],
//         "Path": "D:\\anime\\百合是我的工作！\\S01E02 - [愛戀字幕社][4月新番][百合是我的工作！][watashi no Yuri wa oshigoto desu!][720P][MP4][BIG5][繁中].mp4",
//         "Taglines": [],
//         "Genres": [],
//         "FileName": "S01E02 - [愛戀字幕社][4月新番][百合是我的工作！][watashi no Yuri wa oshigoto desu!][720P][MP4][BIG5][繁中].mp4",
//         "PlayAccess": "Full",
//         "ProductionYear": 2023,
//         "IndexNumber": 2,
//         "ParentIndexNumber": 1,
//         "RemoteTrailers": [],
//         "ProviderIds": {
//             "Tvdb": "9704097"
//         },
//         "IsFolder": false,
//         "ParentId": "25",
//         "Type": "Episode",
//         "Studios": [],
//         "GenreItems": [],
//         "TagItems": [],
//         "ParentLogoItemId": "7",
//         "ParentBackdropItemId": "7",
//         "ParentBackdropImageTags": [
//             "e6bd09f21c6eb377d71fcdabb1c99f83"
//         ],
//         "SeriesName": "Yuri Is My Job!",
//         "SeriesId": "7",
//         "SeasonId": "25",
//         "PrimaryImageAspectRatio": 1.7777777777777777,
//         "SeriesPrimaryImageTag": "57f70414a76119c88bb5cf4a36ff7f71",
//         "SeasonName": "季 1",
//         "ImageTags": {
//             "Primary": "9db86e2458b8cf30df655bd730dd2f1d"
//         },
//         "BackdropImageTags": [],
//         "ParentLogoImageTag": "9505c711354bd84b6359acadda12c8b6",
//         "ParentThumbItemId": "7",
//         "ParentThumbImageTag": "f81963fc7bf2129e13a513a6a0d12d4c",
//         "MediaType": "Video"
//     },
//     "Server": {
//         "Name": "DESKTOP-S7DTKJP",
//         "Id": "2240cf897563470792b631152eb15508",
//         "Version": "4.7.14.0"
//     },
//     "Session": {
//         "RemoteEndPoint": "::1",
//         "Client": "Emby Web",
//         "DeviceName": "Google Chrome Windows",
//         "DeviceId": "e3503c2b-72aa-4d5f-afbe-328c2bc8afc5",
//         "ApplicationVersion": "4.7.14.0",
//         "Id": "bd1baa157f06fb6890430d5e868d281d"
//     },
//     "PlaybackInfo": {
//         "PositionTicks": 0,
//         "PlaylistIndex": 0,
//         "PlaylistLength": 1
//     }
// }
const {sendWXMessage} = require("../send/wxPush");
const {server} = require("../../public/public");

function playStar(play) {
    let sendModel = {
        title: `${play.User.Name}于${play.Date}上播放了${play.Item.SeriesName}`,
        subTitle: `在${play.Session.Client}上播放了第${play.Item.ParentIndexNumber}季第${play.Item.IndexNumber}集`,
        image: `${server.path}/emby/Items/${play.Item.SeriesId}/Images/Primary?maxHeight=525&maxWidth=350&tag=${play.Item.SeriesPrimaryImageTag}`
    }

    sendWXMessage(sendModel)
}

module.exports = {playStar}

