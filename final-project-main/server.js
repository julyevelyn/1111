//install: node js
//install web server package: express >npm install express
const express = require("express");
const server = express();
const port = 3000;
// const cors = require("cors");

// server.use(cors()); // 啟用跨域訪問，讓前端可以請求 API
server.use(express.static(__dirname + "/GG")); // 提供靜態檔案服務

// 啟動伺服器
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});