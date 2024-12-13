document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.querySelector(".menu");
    gsap.registerPlugin(ScrollTrigger);

    // **menu上移動畫** //
    if (window.innerWidth > 1000) {
        let nav = gsap.timeline({
            scrollTrigger: {
                trigger: ".title",
                start: "bottom 0",
                scrub: 1.5,
                markers: false
            },

        });
        nav
            .to("nav", {
                y: -20,
                duration: 4,
                ease: "power1.inOut"
            })
            .to(
                "nav h1",
                {
                    yPercent: 10,
                    duration: 4
                }, "<")
            .to(
                "nav ul",
                {
                    yPercent: 10,
                    duration: 4
                }, "<");
    } else {
        gsap.set("nav", { clearProps: "all" }); // 移除 GSAP 應用的動畫屬性
    }

    // **menu** //
    let isOpen = false;
    gsap.set(menu, { height: 0, opacity: 0 });

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("show");
        if (isOpen) {
            gsap.to(menu, {
                height: 0,
                opacity: 0,
                y: -20, // 添加向上的动画
                duration: 0.3,
                ease: "power1.out",
            });
        } else {
            gsap.fromTo(
                menu,
                { height: 0, opacity: 0, y: -20 }, // 初始位置稍微向上
                {
                    height: "auto",
                    opacity: 1,
                    y: 0, // 回到原位
                    duration: 0.3,
                    ease: "power1.in",
                }
            );
        }
        isOpen = !isOpen;
    });

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
    app = Vue.createApp({
        data() {
            return {
                works: [
                    {
                        title: "武士刀katana",
                        description: "第一次用maya製作武器，花了很多時間研究製作武士刀模型的教程，也嘗試用maya貼膜貼出武士刀破舊的感覺",
                        image: "/final-project-main/img/武器彩圖.jpg"
                    },
                    {
                        title: "Maria",
                        description: "最近很喜歡的遊戲角色，又颯又美",
                        image: "/final-project-main/img/maria.JPG"
                    },
                    {
                        title: "Mercy",
                        description: "有一款叫overwatch的遊戲裡，我最喜歡的角色",
                        image: "/final-project-main/img/天使.JPG"
                    },
                    {
                        title: "龍年賀圖",
                        description: "第一次挑戰畫寫實的龍，花了很多時間研究跟摸索",
                        image: "/final-project-main/img/龍.JPG"
                    },
                    {
                        title: "風信與慕情",
                        description: "這是我很喜歡的一對小說角色",
                        image: "/final-project-main/img/風情.JPG"
                    },
                    {
                        title: "兵長",
                        description: "之前很喜歡的一個動漫角色，我花了很多時間研究金屬的刻痕要怎麼繪製",
                        image: "/final-project-main/img/兵長賀圖.jpg"
                    },
                ],
            };
        },
    });
    app.mount("#app");

    const works = document.querySelectorAll(".work");
    works.forEach((work) => {
        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: work,
                start: "top +=100px",
                end: "+=30%",
                scrub: true,
                pin: true,
                pinSpacing: true,
                markers: true,
            },
        });
        timeline
            .fromTo(work, { opacity: 0 }, { opacity: 1 })
            .fromTo(
                work.querySelector(".gradient-overlay2"),
                { y: 100, opacity: 0 }, // 出现前：向下偏移 100px，透明
                { y: 0, opacity: 1 }, // 出现后：恢复原位，完全显示
                "<"
            )
            .fromTo(
                work.querySelector(".text"),
                { y: 100, opacity: 0 }, // 出现前：向下偏移 100px，透明
                { y: 0, opacity: 1 }, // 出现后：恢复原位，完全显示
                "<"
            )
            .fromTo(
                work.querySelector(".box"),
                { y: 100, opacity: 0 }, // 出现前：向下偏移 100px，透明
                { y: 0, opacity: 1 }, // 出现后：恢复原位，完全显示
                "<"
            );
    });

    // **backToTop** //
    gsap.fromTo(
        "#backToTop",
        { opacity: 0, y: 0 },
        {
            opacity: 1,
            y: -10,
            ease: "power1.in",
            scrollTrigger: {
                trigger: ".title",
                start: "bottom top",
                markers: false,
                toggleActions: "play none none reverse", // 切换回到顶部时，重置 opacity 和 y 值
                onEnter: () => {
                    document.querySelector("#backToTop").style.pointerEvents =
                        "auto";
                },
                onLeaveBack: () => {
                    document.querySelector("#backToTop").style.pointerEvents =
                        "none";
                },
            },
        }
    );
    // 点击按钮回到顶部
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0, // 滚动到顶部
            behavior: "smooth", // 平滑滚动
            opacity: 0,
        });
    });
});

