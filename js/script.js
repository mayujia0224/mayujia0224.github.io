// 首页：点击按钮显示/隐藏更多信息
const toggleBtn = document.getElementById("toggleBtn");
const moreInfo = document.getElementById("moreInfo");

if (toggleBtn && moreInfo) {
    toggleBtn.addEventListener("click", () => {
        if (moreInfo.classList.contains("hidden")) {
            moreInfo.classList.remove("hidden");
            toggleBtn.textContent = "收起";
            // 增加渐入动画
            moreInfo.style.opacity = 0;
            let opacity = 0;
            const timer = setInterval(() => {
                opacity += 0.1;
                moreInfo.style.opacity = opacity;
                if (opacity >= 1) clearInterval(timer);
            }, 30);
        } else {
            moreInfo.classList.add("hidden");
            toggleBtn.textContent = "点击了解更多";
        }
    });
}

// 导航栏滚动效果（可选）
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (navbar && window.scrollY > 50) {
        navbar.style.backgroundColor = "#1a365d";
        navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
    } else if (navbar) {
        navbar.style.backgroundColor = "#1a365d";
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    }
});