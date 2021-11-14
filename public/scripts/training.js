window.addEventListener("load", init);

let sections = null;
let sectionsData = null;

let sectionsIds = [];
let sectionsDataIds = [];

// Register contents height to be able to animate them
let maxHeightMap = new Map;

let registeredSections = [];

function init() {
    sections = document.querySelectorAll(".sectionToggle");
    sectionsData = document.querySelectorAll(".sectionData");

    // Retreive sections buttons ids
    for (let i = 0; i < sections.length; i++) {
        sectionsIds.push(sections[i].id);
    }

    // Retreive sections data ids
    for (let i = 0; i < sectionsData.length; i++) {
        sectionsDataIds.push(sectionsData[i].id);
    }

    // Add click event listner to section buttons
    for (let i = 0; i < sections.length; i++) {
        sections[i].addEventListener("click", function() {
            let currentId = sections[i].id;
            toggleSections(currentId);
        });
    }

    // Retreive data
    let data = document.querySelectorAll(".data");

    // Add click event listener to data
    for (let i = 0; i < data.length; i++) {
        document.querySelectorAll(".data")[i].addEventListener("click", function() {
            let currentData = data[i];
            toggleData(currentData);
        });
    }
}

function registerContentsHeight(currentSectionId) {
    if (!registeredSections.includes(currentSectionId)) {
        registeredSections.push(currentSectionId);

        let contents = document.querySelectorAll(`#${currentSectionId} .content`);

        for (let i = 0; i < contents.length; i++) {
            // Generate unique identifier
            contents[i].id = Date.now();
            maxHeightMap.set(contents[i].id, contents[i].offsetHeight);
            contents[i].classList.add("h-0");
        }
    }
}

function revealDataAnimation(currentSectionId) {
    anime({
        targets: document.querySelectorAll(`#${currentSectionId} .data`),
        opacity: [0, 1],
        scale: [0.7, 1],
        easing: "easeInOutQuart",
        delay: anime.stagger(200)
    });
}

function toggleData(data) {
    let content = data.querySelector(".content");
    content.classList.toggle("open");

    anime({
        targets: data.querySelector(".arrow"),
        rotate: "+=180deg",
        duration: 1000
    });

    anime({
        targets: content,
        height: function() {
            let values = ["0px", maxHeightMap.get(content.id)];

            if (!content.classList.contains("open")) {
                let a = values[0];
                let b = values[1];

                values[0] = b;
                values[1] = a;
            }

            return values;
        },
        duration: 500,
        easing: "easeInOutSine"
    });
}

function toggleSections(sectionId) {
    let idsToHide = arrayRemove(sectionsIds, sectionId).map(element => element.slice(0, 2));
    let idToShow = sectionId.slice(0, 2);

    // Light up clicked button
    document.getElementById(idToShow + "Button").classList.remove("grayscale");
    document.getElementById(idToShow + "Button").classList.add("border-4");

    // Show wanted section
    document.getElementById(idToShow + "Section").classList.remove("hidden");

    registerContentsHeight(idToShow + "Section");

    revealDataAnimation(idToShow + "Section");

    // Light down others buttons
    for (let i = 0; i < idsToHide.length; i++) {
        document.getElementById(idsToHide[i] + "Button").classList.add("grayscale");
        document.getElementById(idsToHide[i] + "Button").classList.remove("border-4");

        let currentSection = document.getElementById(idsToHide[i] + "Section");

        if (!currentSection.classList.contains("hidden")) {
            currentSection.classList.add("hidden");
        }
    }
}

function arrayRemove(arr, value) {
    return arr.filter(function(ele) {
        return ele != value;
    });
}