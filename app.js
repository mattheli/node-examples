const fs = require('fs');

// fs.readdir
// Read Directory
fs.readdir('./', function(err, files) {
    if(err) console.log('Error', err)
    else console.log('Result', files);
})