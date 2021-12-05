const colors = require("tailwindcss/colors");

module.exports = {
    purge: {
        enabled: true,
        content: ["./*.html"],
        options: {
            safelist: ["dark"],
        }
    },
    darkMode: "class", // or "media" or "class"
    theme: {
        extend: {
            minHeight: {
                14: "3.5rem"
            },
            transitionProperty: {},
            fontFamily: {
                cleanBlack: ["AdobeCleanBlack"],
                cleanBold: ["AdobeCleanBold"],
                cleanExtraBold: ["AdobeCleanExtraBold"],
                cleanLight: ["AdobeCleanLight"],
                cleanRegular: ["AdobeCleanRegular"]
            },
            colors: {
                customGray: "#1c1c1c",
                lightgray: "#fbfbfb",
                lightSun: "#FFB363",
                darkOrange: "#FA8D13"
            },
            boxShadow: {
                around: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
                aroundSun: "0px 10px 100px -35px #ff5200"
            },
            keyframes: {},
            animation: {}
        }
    },
    variants: {
        extend: {
            grayscale: ["hover"]
        }
    },
    plugins: [],
}