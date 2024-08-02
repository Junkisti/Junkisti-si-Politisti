const path = require('path');

module.exports = {
    entry: "./src/app.js",
    output: {
        filename: "JunkistiApp.js",
        path: path.resolve(__dirname, "dist")
    },

    devServer: {
        static: "./",
        port: 9000
    },

    mode: "production"
}