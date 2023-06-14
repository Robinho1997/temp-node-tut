const path = require("path");

console.log(path.sep);

const filePath = path.join("\content", "subdolder", "test.txt");
const absolute = path.resolve(__dirname, "content", "subdolder", "test.txt")

console.log(filePath)

console.log(absolute)
