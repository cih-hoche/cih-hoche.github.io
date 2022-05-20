let title;
if (window.innerWidth > 620) {
    title = document.querySelector("header > h1.long_text");
}
else {
    title = document.querySelector("header > h1.short_text");
}

document.onscroll = function (e) {
    document.querySelector(".headerbg").setAttribute("style", "top: -" + (window.scrollY / 2) + "px");
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function startTitleAnimation() {
    const enableShadow = () => {
        title.classList.add("shadowOn");
    }
    const disableShadow = () => {
        title.classList.remove("shadowOn");
    }
    for (let i = 0; i < 5; i++) {
        enableShadow();
        await sleep(randint(2, 7) * 10);
        disableShadow();
        await sleep(randint(5, 10) * 10);
    }
    for (let i = 0; i < 3; i++) {
        enableShadow();
        await sleep(randint(10, 20) * 10);
        disableShadow();
        await sleep(randint(5, 15) * 10);
    }
    enableShadow();
    continuousTitleAnimation();
}

async function continuousTitleAnimation() {
    const enableShadow = () => {
        title.classList.add("shadowOn");
    }
    const disableShadow = () => {
        title.classList.remove("shadowOn");
    }
    disableShadow();
    await sleep(100);
    enableShadow();
    await sleep(50);
    disableShadow();
    await sleep(50);
    enableShadow();
    await sleep(randint(5, 10) * 1000);
    continuousTitleAnimation();
}

startTitleAnimation();
