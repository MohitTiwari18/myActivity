//here we will use file system module, simple node js script for create,delete,read etc files from command line
//import built in function for file system
const fs = require("fs");
//cmd line arguement passed to the script. "process.argv" is an array
const input = process.argv;
//operations
if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "remove") {
  fs.unlinkSync(input[3]);
} else {
  console.log("invalid input ");
}
