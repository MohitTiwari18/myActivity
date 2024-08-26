//asynchronous programming
//this shows how to read,append,rename and deleted files
//import file system and path module
const fs = require("fs");
const path = require("path");
//creates a path to a directory name "crud" and __dirname is variable contains the current directory path to the folder
const dirPath = path.join(__dirname, "crud"); //path.join combines dirname and folder name
//create a path to specific file name
const filePath = `${dirPath}/apple.txt`;
//operations
//code to create file
//fs.writeFileSync(filePath, "this is  a fruits house");
//code to read file
fs.readFile(filePath, "utf8", (req, resp) => {
  //callback function this is
  console.log(resp);
});
//code to update the file
// fs.appendFile(filePath, " for fruits", (err) => {
//   if (!err) console.log("file is updated");
// });
//code to rename file
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//   if (!err) console.log("file name is updated");
// });
//code to delete file
//fs.unlinkSync(`${dirPath}/fruit.txt`);
