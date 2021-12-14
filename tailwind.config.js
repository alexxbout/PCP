module.exports = {
    content: ["./**/*.html"],
    theme: {
        extend: {
            minHeight: {
                14: "3.5rem"
            },
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
                global: "#FF5200"
            },
            boxShadow: {
                around: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
                aroundColored: "0px 10px 100px -35px #FF5200"
            }
        }
    },
    plugins: []
}