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
// console.log(process.argv[2]);
// console.log(process.argv[3]);

const requestCallback = function (error, response, body) {
  if (!response || response.statusCode !== 200) {
    console.log('Request Error:', response.statusCode);
    return; 
  }
  console.log(`writing ${body.length} bytes to ${fileName}`);
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
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
