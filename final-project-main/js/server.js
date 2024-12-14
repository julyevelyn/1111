//install: node js
//install web server package: express >npm install express
const express = require("express");
const server = express();
const cors = require("cors");

server.use(cors()); // 啟用跨域訪問，讓前端可以請求 API
server.use(express.static(__dirname + "/public")); // 提供靜態檔案服務

// API 路由，返回 works 資料
server.get("/api/works", (req, res) => {
    const works = [
        {
            title: "天秤宮",
            description: "高中時畫的作品，第一次嘗試複雜的背景繪製",
            image: "/img/天秤宮.jpg"
        },
        {
            title: "Maria",
            description: "最近很喜歡的遊戲角色，又颯又美",
            image: "/img/maria.JPG"
        },
        {
            title: "Mercy",
            description: "有一款叫overwatch的遊戲裡，我最喜歡的角色",
            image: "/img/天使.JPG"
        },
        {
            title: "龍年賀圖",
            description: "第一次挑戰畫寫實的龍，花了很多時間研究跟摸索",
            image: "/img/龍.JPG"
        },
        {
            title: "風信與慕情",
            description: "這是我很喜歡的一對小說角色",
            image: "/img/風情.JPG"
        },
        {
            title: "兵長",
            description: "之前很喜歡的一個動漫角色，我花了很多時間研究金屬的刻痕要怎麼繪製",
            image: "/img/兵長賀圖.jpg"
        },
    ];
    res.json(works); // 傳遞 JSON 格式的資料
});

// 啟動伺服器
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});