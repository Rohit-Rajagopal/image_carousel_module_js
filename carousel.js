import "./carousel.css";

function createCarousel(container, navDots=false, timer=0) {
    const frame = container.querySelector(".image-frame")
    const carousel = frame.querySelector(".images");
    const images = carousel.querySelectorAll("img");
    let dots = null;
    if (navDots) {
        const navDiv = document.createElement("div");
        navDiv.width = frame.width;
        navDiv.classList.add("nav-div");
        dots = [];
        for (let i = 0; i < images.length; i ++) {
            const navButton = document.createElement("button");
            navButton.classList.add("nav-button");
            navButton.value = i;
            dots.push(navButton);
            navDiv.appendChild(navButton);
        }
        navDiv.addEventListener("click", (e) => {
            if (e.target.nodeName == "BUTTON") {
                slide.cur = e.target.value;
            }
        })
        frame.after(navDiv);
    }
    let slide = {
        _cur: 0,
        get cur() {
            return this._cur;
        },
        set cur(val) {
            if (navDots) dots[this._cur].classList.toggle("active");
            this._cur = Number(val);
            if (this._cur > (images.length - 1)) this._cur = 0;
            if (this._cur < 0) this._cur = (images.length - 1);
            if (navDots) dots[this._cur].classList.toggle("active");
            carousel.style.transform = `translateX(${-this._cur * 100}%)`;
        }
    };
    if (navDots) dots[slide.cur].classList.toggle("active");
    container.addEventListener("click", (e) => {
        if (e.target.classList.contains("image-carousel-next")) {
            slide.cur += 1;
        }
        else if (e.target.classList.contains("image-carousel-prev")) {
            slide.cur -= 1;
        }
    })
    if (timer > 0) {
        let intervalId = setInterval(() => {slide.cur += 1}, timer);
    }
}

function carouselInit() {
    const containers = document.querySelectorAll(".image-carousel");
    for (let container of containers) {
        let ifNav = false, timer = 0;
        if (container.dataset.nav === "true") ifNav = true;
        if (container.dataset.timer !== "0") timer = Number(container.dataset.timer);
        createCarousel(container, ifNav, timer);
    }
}

export {carouselInit};