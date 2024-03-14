const fs = require("fs");

// fs.writeFile("message.txt","Hello from Node js",(err) => {
//     if (err) throw err;
//     console.log("The file has been saved!");
// });

//Read a file:
// fs.readFile("./message.txt",(err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

//The code above returns a buffer. To return the string then need to specify the encoding and for this case it is utf8.
fs.readFile("./message.txt","utf8",(err, data) => {
    if (err) throw err;
    console.log(data);
});