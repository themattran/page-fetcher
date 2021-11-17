const request = require('request'); 
const fs = require('fs')
const path = process.argv.slice(2)[0]
const url = "http://www.example.edu/"


if (!path) {
  console.log("Need path!");
  return process.exit()
}

const download = (url) => {
  request(url, (error, response, body) => {
    if (error) {
      return
    }
    console.log(error);
    //console.log('status code', response.statusCode)
    if (response.statusCode !== 200) {
      console.log(`Error HTTP ${response.statusCode}`);
      return
    }

    if (fs.existsSync(path)) {
      fs.writeFile(path, body, (error) => {
      console.log('local path file already exists and will be over written'); //prompt
      console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
    })

  } else {
    console.log('Local file path given is invalid');
    return process.exit(); 
  }
    });
}

download(url)