const module = (function () {
    const change = (img) => {
        img.src =
            "images/" +
            (img.src.includes("icon5.png") ? "icon4.png" : "icon5.png");
    };

    return { change: change };
})();
