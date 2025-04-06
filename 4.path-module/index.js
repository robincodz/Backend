const path=require("path")
console.log("DirectoryName:",path.dirname(__filename));
console.log("FileName:",path.basename(__filename));
console.log("fileExtension:",path.extname(__filename));

const joinPath=path.join("/user","document","node","projects")
console.log("jointPath",joinPath);

const resolvePath=path.resolve("user","documents","node","projects")
console.log("resolvedPath",resolvePath);