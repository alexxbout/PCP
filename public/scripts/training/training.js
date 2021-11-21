import { buildData } from "./dataBuilder.js";

window.addEventListener("load", init);

let sectionsIds = [];

/**
 * Init app function
 */
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
        data[i].querySelector(".revealSection").addEventListener("click", function(e) {
            let currentData = data[i];
            toggleData(currentData.id);
        });
    }
}

/**
 * Set a random identifier for specified section
 * @param {string} currentSectionId 
 */
function generateRandomDataIdentifiers(currentSectionId) {
    let contents = document.querySelectorAll(`#${currentSectionId} .data`);

    for (let i = 0; i < contents.length; i++) {
        // Generate unique identifier
        contents[i].id = Date.now() + Math.random();
    }
}

/**
 * Play reveal animation for specified section 
 * @param {string} currentSectionId 
 */
function revealDataAnimation(currentSectionId) {
    anime({
        targets: document.querySelectorAll(`#${currentSectionId} .data`),
        opacity: [0, 1],
        scale: [0.7, 1],
        easing: "easeInOutQuart",
        delay: anime.stagger(100)
    });
}

/**
 * Toggle data visibility of specified section
 * @param {string} dataUniqueId 
 */
function toggleData(dataUniqueId) {
    let data = document.getElementById(dataUniqueId);
    let content = data.querySelector(".content");
    let arrow = data.querySelector(".arrow");

    content.classList.toggle("hidden");
    content.classList.toggle("flex");

    anime({
        targets: arrow,
        rotate: function() {
            let val = "180deg";

            if (content.classList.contains("hidden"))
                val = "0deg";

            return val;
        },
        duration: 1000
    });

    anime({
        targets: document.getElementById(dataUniqueId).querySelectorAll(".title"),
        fontSize: function() {
            let val = window.screen.width < 640 ? "20px" : "22px";

            if (content.classList.contains("hidden"))
                val = "16px";

            return val;
        },
        duration: 400,
        easing: "easeOutBack"
    });

    anime({
        targets: document.getElementById(dataUniqueId).querySelectorAll(".folder"),
        scale: function() {
            let val = window.screen.width < 640 ? 1.2 : 1.3;

            if (content.classList.contains("hidden"))
                val = 1;

            return val;
        },
        duration: 400,
        easing: "easeOutBack"
    });

    data.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
}

/**
 * Toggle visibility of specified section
 * @param {string} sectionId 
 */
function toggleSections(sectionId) {
    // Close opened data
    let openedData = getOpenedData(sectionId);

    for (let i = 0; i < openedData.length; i++) {
        toggleData(openedData[i]);
    }

    let idsToHide = arrayRemove(sectionsIds, sectionId);
    let idToShow = sectionId;

    // Light up clicked button
    document.getElementById(idToShow + "Btn").classList.remove("grayscale");
    document.getElementById(idToShow + "Btn").classList.add("border-4");

    // Show wanted section
    document.getElementById(idToShow + "Section").classList.add("grid");
    document.getElementById(idToShow + "Section").classList.remove("hidden");

    revealDataAnimation(idToShow + "Section");

    // Light down others buttons
    for (let i = 0; i < idsToHide.length; i++) {
        document.getElementById(idsToHide[i] + "Btn").classList.add("grayscale");
        document.getElementById(idsToHide[i] + "Btn").classList.remove("border-4");

        let currentSection = document.getElementById(idsToHide[i] + "Section");

        if (!currentSection.classList.contains("hidden")) {
            currentSection.classList.add("hidden");
            currentSection.classList.remove("grid");
        }
    }
}

/**
 * Return an array of oepend data
 * @param {string} sectionId 
 * @returns array of opened data for specific section. Ex : ap, b1, b2, b3
 */
function getOpenedData(sectionId) {
    let openedUniqueId = [];
    let section = document.getElementById(sectionId + "Section");
    let dataSection = section.querySelectorAll(".data");

    for (let i = 0; i < dataSection.length; i++) {
        let dataVisibility = dataSection[i].querySelector(".content");
        if (!dataVisibility.classList.contains("hidden"))
            openedUniqueId.push(dataSection[i].id)
    }

    return openedUniqueId;
}

/**
 * Remove specified item from array
 * @param {Array} arr 
 * @param {string} value 
 * @returns 
 */
function arrayRemove(arr, value) {
    return arr.filter(function(ele) {
        return ele != value;
    });
}