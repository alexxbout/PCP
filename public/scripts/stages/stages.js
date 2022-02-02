window.addEventListener("load", init);

function init() {
    loadAnimations();
}

function loadAnimations() {
    const toAnime = ["titleAnime1", "titleAnime2"];
    const toAnimeElements = [document.querySelectorAll("." + toAnime[0])[0], document.querySelectorAll("." + toAnime[0])[1]];
    const endScrollSectionSize = document.querySelector(".animateScrollSection").offsetHeight + document.querySelector(".homeSection").offsetHeight;

    window.addEventListener("wheel", function(e) {
        const delta = Math.sign(e.deltaY);

        if (window.scrollY > 0 && (checkVisible(toAnimeElements[0]) || checkVisible(toAnimeElements[1]))) {

            console.log("Ok");

            toAnime.forEach(element => {
                if ((window.scrollY > 0 && window.scrollY <= endScrollSectionSize)) {
                    let move = delta == 1 ? "+" : "-";

                    if (element == toAnime[0]) {
                        move = move == "+" ? "-" : "+";
                    }

                    anime({
                        targets: "." + element,
                        translateX: move + (element == toAnime[1] ? "=100px" : "=150px"),
                        easing: "easeOutSine"
                    });
                }
            });
        }
    })
}

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}