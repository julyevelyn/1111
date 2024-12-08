document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    // 点击按钮回到顶部
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0, // 滚动到顶部
            behavior: "smooth", // 平滑滚动
        });
    });

    const app = Vue.createApp({
    data() {
        return {
            works: [
                {
                    title: "天秤宮",
                    description: "高中時畫的作品，第一次嘗試複雜的背景繪製",
                    image: "image/天秤宮.jpg"

                },
                {
                    title: "Maria",
                    description: "最近很喜歡的遊戲角色，又颯又美",
                    image: "image/天秤宮.jpg"
                }
            ]
        };
    }
});

app.mount("#app");  

});
