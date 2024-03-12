import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs'
// 1. Use the inquirer npm package to get user input.
const question = [{
    type: 'input',
    name: 'URL',
    message: "What's the Site URL?",
}]
inquirer
  .prompt(question) 
  .then((answers) => {    
    // 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
    const url = answers.URL;

    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));  
    
    // 3. Create a txt file to save the user input using the native fs node module.
    fs.writeFile('UserInput.txt', url, err => {
      if (err) {
        console.error(err);
      } else {
        console.log("File successfully written!");
      }
    });
  })
  .catch((error) => {
    console.log(error);
  });
