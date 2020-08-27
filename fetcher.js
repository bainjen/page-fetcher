// Implement a small command line node app called fetcher.js which should take a URL as a command-line argument as well as a local file path and download the resource to the specified path.

// Upon completion:
// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to./ index.html
if (process.argv.length < 4) {
  console.log('not enough parameters!')
  return; 
}
const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const fileName = process.argv[3];

const requestCallback = function (error, response, body) {
  if (!response || response.statusCode !== 200) {
    console.log('Request Error:', response && response.statusCode);
    return; 
  }
  console.log(`writing ${body.length} bytes to ${fileName}`);
  fs.writeFile(fileName, body, function (err) {
    if (err) {
      console.log('Error!', err);
    } else 
    console.log("we're done")
  })
};

console.log("Requesting the page:", url);
request(url, requestCallback);

//write file with fs.writeFile

//need to take user input from command line in form of URL + FILE PATH  --> use rl.(?)

//download resource to specified path.




//---------example request from earlier-------------

// console.log('error:', error); // Print the error if one occurred
// console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// console.log('body:', body); // Print the HTML for the Google homepage.


//Kelis & David's code example of using statSync

//  fs.access(fileName, () => {
//         fs.writeFile(fileName, body, () => {
//           const stats = fs.statSync(fileName).size;
//           console.log(`Downloaded and saved ${stats} bytes to ${fileName}`);
//         });


//Thai's code he shared
// const request = require('request');
// const fs = require('fs');
// const readline = require('readline');

// const args = process.argv;

// request(args[2], (error, response, body) => {
//   console.log('error', error);
//   console.log('statusCode:', response && response.statusCode);
//   //console.log('body', body); // Do we need this?
  
//   const rl = readline.createInterface(process.stdin, process.stdout);
//   fs.writeFile(args[3], body, function (err) {
//     if (err) {
//       throw err;
//     } else if (args[3]) {
//       console.log(`Downloaded and saved ${body.length} bytes to ${args[3]}`)
//     }
//   });
  
//   rl.question("Overwrite? [yes]/no: ", function(answer) {
//     if(answer == "no") {
//       console.log("Not overwriting, bye.");
//       process.exit();
//     } else {
//       console.log(`Overwriting file: ${args[3]}`);
//     }
//     rl.close();
//   })
// });


//Andre's code he shared
// const fs = require('fs');
// const request = require('request');

// const url = process.argv.slice(2)[0];
// const fileTarget = process.argv.slice(2)[1];

// //request the page (error, response, body)
// const getBody = callback => {
//     request(url, (error, response, body) => {
//         if (error) throw error;
//         callback(body);
//     });
// };

// getBody(content => {
//     fs.writeFile(fileTarget, content, 'utf8', error => {
//         if (error) throw error;
//         const fileSize = fs.statSync(fileTarget).size;
//         console.log(`Downloaded and saved ${fileSize} bytes to ./index.html`);
//     });
// });