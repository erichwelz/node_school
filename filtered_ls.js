var fs = require('fs')
var path = require('path')

var dir = process.argv[2]
var ext = "." + process.argv[3]

fs.readdir(dir, function(err, list) {
  list.forEach(function(file) {
  if(path.extname(file) === ext)
  console.log(file);
  })
});


// var fs = require('fs')

// fs.readFile(process.argv[2], function (err, data) {
//   var lines = data.toString().split('\n').length - 1

//   if (err) throw err;
//   console.log(lines);
// });
