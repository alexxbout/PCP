import { buildData } from "./builder.js";

window.addEventListener("load", init);

let sectionsIds = [];

function init() {
    // Build data
    buildData();

    // Buttons
    let sectionsBtn = document.querySelectorAll(".sectionBtn");

    // Retreive sections buttons ids
    // Add click event listner to section buttons
    // Generate random identifiers for each data
    for (let i = 0; i < sectionsBtn.length; i++) {
        let currentId = sectionsBtn[i].id;
        // Id without Button Button or Section after : ap b1 b2 or b3
        let slicedId = currentId.slice(0, 2);

        sectionsIds.push(slicedId);

        sectionsBtn[i].addEventListener("click", function() {
            toggleSections(slicedId);
        });

        generateRandomDataIdentifiers(slicedId + "Section");
    }

    // Retreive data
    let data = document.querySelectorAll(".data");

    // Add click event listener to data
    for (let i = 0; i < data.length; i++) {
        data[i].addEventListener("click", function() {
            let currentData = data[i];
            toggleData(currentData.id);
        });
    }
}

function generateRandomDataIdentifiers(currentSectionId) {
    let contents = document.querySelectorAll(`#${currentSectionId} .data`);

    for (let i = 0; i < contents.length; i++) {
        // Generate unique identifier
        contents[i].id = Date.now() + Math.random();
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

function toggleData(dataUniqueId) {
    let data = document.getElementById(dataUniqueId);
    let content = data.querySelector(".content");
    let arrow = data.querySelector(".arrow");

    content.classList.toggle("hidden");
    content.classList.toggle("flex");

    anime({
        targets: arrow,
        rotate: "+=180deg",
        duration: 1000
    });
}

function toggleSections(sectionId) {
    let idsToHide = arrayRemove(sectionsIds, sectionId);
    let idToShow = sectionId;

    console.log("idsToHide : " + idsToHide);
    console.log("idToShow : " + idToShow);

    // Light up clicked button
    document.getElementById(idToShow + "Btn").classList.remove("grayscale");
    document.getElementById(idToShow + "Btn").classList.add("border-4");

    // Show wanted section
    document.getElementById(idToShow + "Section").classList.remove("hidden");

    revealDataAnimation(idToShow + "Section");

    // Light down others buttons
    for (let i = 0; i < idsToHide.length; i++) {
        document.getElementById(idsToHide[i] + "Btn").classList.add("grayscale");
        document.getElementById(idsToHide[i] + "Btn").classList.remove("border-4");

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