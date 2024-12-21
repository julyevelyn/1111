//install: node js
//install web server package: express >npm install express
const express = require("express");
const server = express();
const port = 3000;


//web root
server.use(express.static(__dirname + "/GG")); //提供靜態檔案服務

//database
const DB = require("nedb-promises");
const drawDB = DB.create(__dirname + "/draw.db");
const _3DDB = DB.create(__dirname + "/3D.db");
const animateDB = DB.create(__dirname + "/animate.db");

// drawDB.insert([
//     {order:1,title: "天秤宮",description: "高中時畫的作品，第一次嘗試複雜的背景繪製",image: "../img/天秤宮.jpg",},
//     {order:2,title: "Maria",description: "最近很喜歡的遊戲角色，又颯又美",image: "../img/maria.JPG",},
//     {order:3,title: "Mercy", description: "有一款叫overwatch的遊戲裡，我最喜歡的角色",image: "../img/天使.JPG"},
//     {order:4,title: "龍年賀圖",description: "第一次挑戰畫寫實的龍，花了很多時間研究跟摸索",image: "../img/龍.JPG"},
//     {order:5,title: "風信與慕情",description: "這是我很喜歡的一對小說角色",image: "../img/風情.JPG"},
//     {order:6,title: "兵長", description: "之前很喜歡的一個動漫角色，我花了很多時間研究金屬的刻痕要怎麼繪製",image: "../img/兵長賀圖.jpg"}
// ])

// _3DDB.insert([
//     { order: 1, title: "武士刀katana", description: "第一次用maya製作武器，花了很多時間研究製作武士刀模型的教程，也嘗試用maya貼膜貼出武士刀破舊的感覺", image: "../img/武器彩圖.jpg", },
//     { order: 2, title: "建築練習", description: "第一次製作建築，並且嘗試用sp製作材質紋理", image: "../img/房子1.jpg", },
//     { order: 3, title: "麥田女孩", description: "跟著教程學習了blender的角色建模", image: "../img/麥田女孩.png" },
//     { order: 4, title: "教堂建築", description: "嘗試用blender製作較為複雜的哥德教堂，屋頂花了特別多時間研究製作方式", image: "../img/教堂.JPG" },
//     { order: 5, title: "漂浮石頭", description: "學習用blender雕刻石頭，並且練習了打光", image: "../img/石頭.JPG" },
// ])

animateDB.insert([
    // { order: 1, title: "塵沒", description: "高中畢製畫的動畫，也是我的動畫初體驗，除了學到畫動畫的流程與方式外，也學到如何與組員用良性的方式溝通", video: "../mp4/塵沒.mp4", },
    // { order: 2, title: "飢餓小恐龍", description: "大二首次嘗試自己畫動畫，因為沒有組員的幫助，因此要更精細的規劃工作流程，製作起來也更加辛苦", video: "../mp4/恐龍.mp4", },
    // { order: 3, title: "蔬菜大冒險", description: "第一次嘗試製作偶動畫，由於沒有任何經驗，因此前期重拍了很多次", video: "../mp4/偶動畫.mp4", },
    {
        order: 1, title: "塵沒", description: "高中畢製畫的動畫，也是我的動畫初體驗，除了學到畫動畫的流程與方式外，也學到如何與組員用良性的方式溝通", image: "../img/天秤宮.jpg", title2: "作品內容", video: "../mp4/塵沒.mp4", items: [
            { id: 1, title: "角色色計圖", image: "../img/畢製設定.jpg" },
            { id: 2, title: "海報原圖", image: "../img/海報原圖.jpg" },
            { id: 3, title: "畢製展覽", image: "../img/畢製擺攤.jpg" },
        ]
    },
])

// DB.insert([{ id: 1, title1: "", des: "", img: "", title2: "", video: "", items: [{ id: 1, img: "", des: "" }] }]);

server.get("/draw", (req, res) => {
    //DB
    drawDB.find({}).then((results) => {
        if (results != null) {
            res.send(results);
        } else {
            res.send("Error!");
        }
    });
});

server.get("/3D", (req, res) => {
    //DB
    _3DDB.find({}).then((results) => {
        if (results != null) {
            res.send(results);
        } else {
            res.send("Error!");
        }
    });
});

server.get("/animate", (req, res) => {
    //DB
    animateDB.find({}).then((results) => {
        if (results != null) {
            res.send(results);
        } else {
            res.send("Error!");
        }
    });
});

// 啟動伺服器
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
