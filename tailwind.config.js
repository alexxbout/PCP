const colors = require("tailwindcss/colors");

module.exports = {
    purge: {
        enabled: true,
        content: ["./**/*.html"],
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
                global: "#FF661F"
            },
            boxShadow: {
                around: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
                aroundColored: "0px 10px 100px -35px #FF661F"
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