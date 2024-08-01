const path = require('path');

module.exports = {
    entry: "./JS/app.js",
    output: {
        filename: "JunkistiApp.js",
        path: path.resolve(__dirname, "dist")
    }
}