const colors = require("tailwindcss/colors");

module.exports = {
    purge: {
        enabled: false,
        content: ["./public/**/*.html"],
        options: {
            safelist: ["dark"],
        }
    },
    darkMode: "class", // or "media" or "class"
    theme: {
        extend: {
            transitionProperty: {},
            fontFamily: {
                cleanBlack: ["AdobeCleanBlack"],
                cleanBold: ["AdobeCleanBold"],
                cleanExtraBold: ["AdobeCleanExtraBold"],
                cleanLight: ["AdobeCleanLight"],
                cleanRegular: ["AdobeCleanRegular"]
            },
            colors: {
                orange: colors.orange,
                amber: colors.amber,
                darkgray: "#1c1c1c",
                lightgray: "#fbfbfb",
                sun: "#ff5200"
            },
            boxShadow: {
                around: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
            },
            keyframes: {},
            animation: {}
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}