document.addEventListener("DOMContentLoaded", function () {

    gsap.registerPlugin(ScrollTrigger);

    // **title** //
    let title = gsap.timeline({
        scrollTrigger: {
            trigger: ".title", // 触发动画的元素
            start: "top top", // 起始位置：元素顶部与视口顶部对齐时
            end: "+=50%", // 滚动到多长时间后结束
            pin: true, // 固定第一个画面
            pinSpacing: true, // 保留滚动占位，确保第二个画面不过早上移
            scrub: true, // 滚动时动画会同步滚动
            markers: false,
        },
    });

    title
        .to(".gradient-overlay", {
            scale: 2, // 放大两倍
            opacity: 0, // 渐渐消失
            ease: "power1.out", // 缓动效果
        })
        .to(
            ".title",
            {
                // 设置滚动触发的模糊效果
                filter: "blur(5px)", // 设置模糊效果，5px 是模糊的强度
                ease: "none", // 使用平滑的过渡
            },
            "<"
        ); //delay (seconds)

    // **work** //
    let app = Vue.createApp({
        data() {
            return {
                works: [], // 初始為空
            };
        },
    }).mount("#app");

    $.ajax({
        url: "/animate",
        method: "get",
        dataType: "json",
        success: (result) => {
            app.works = result.sort((a, b) => { return a.order - b.order }); // 正確綁定資料
            console.log(app.works);
            setTimeout(() => {
                const video = document.querySelector(".mp4");
                video.load(); // 確保影片資源已加載
                workAnimation();
            }, 0);
        },
        error: (error) => {
            console.error("Error fetching data:", error);
        },
    });



    function workAnimation() {
        const first = document.querySelectorAll(".first");
        first.forEach((first) => {
            let timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: first,
                    start: "top +=80%",
                    end: "top +=80%",
                    scrub: false,
                    markers: false,
                },
            });
            timeline
                .fromTo(first, { opacity: 0 }, { opacity: 1 })
                .fromTo(
                    first.querySelector(".text"),
                    { y: 100, opacity: 0 }, // 出现前：向下偏移 100px，透明
                    { y: 0, opacity: 1 }, // 出现后：恢复原位，完全显示
                    "<"
                )
                .fromTo(
                    first.querySelector(".box"),
                    { y: 100, opacity: 0 }, // 出现前：向下偏移 100px，透明
                    { y: 0, opacity: 1 }, // 出现后：恢复原位，完全显示
                    "<"
                );
        });

        const second = document.querySelectorAll(".second");
        second.forEach((second) => {
            let timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: second,
                    start: "top +=80%",
                    end: "top +=80%",
                    scrub: false,
                    markers: false,
                },
            });
            timeline
                .fromTo(second, { opacity: 0 }, { opacity: 1 })
                .fromTo(
                    second.querySelector(".text"),
                    { y: 100, opacity: 0 }, // 出现前：向下偏移 100px，透明
                    { y: 0, opacity: 1 }, // 出现后：恢复原位，完全显示
                    "<"
                )
                .fromTo(
                    second.querySelector(".mp4"),
                    { y: 100, opacity: 0 }, // 出现前：向下偏移 100px，透明
                    { y: 0, opacity: 1 }, // 出现后：恢复原位，完全显示
                    "<"
                );
        });
        const third = document.querySelectorAll(".third");
        third.forEach((third) => {
            let timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: third,
                    start: "top +=80%",
                    end: "top +=80%",
                    scrub: false,
                    markers: false,
                },
            });
            timeline
                .fromTo(third, { opacity: 0 }, { opacity: 1 })
                .fromTo(
                    third.querySelector(".item"),
                    { y: 100, opacity: 0 }, // 出现前：向下偏移 100px，透明
                    { y: 0, opacity: 1 }, // 出现后：恢复原位，完全显示
                    "<"
                )

        });
    }
});