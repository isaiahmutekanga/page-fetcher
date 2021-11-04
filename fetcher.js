const request = require("request");
const userinputsite = process.argv.slice(2);
const URL = userinputsite[0];
const filepath = userinputsite[1];

const fs = require("fs");

request(URL, (error, response, body) => {
  // console.log("error:", error); // Print the error if one occurred
  // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  // console.log("body:", body); // Print the HTML for the Google homepage.
  fs.writeFile(filepath, body, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
  });
  console.log(`Downloaded and saved ${body.length} bytes to ./index.html`);
});
