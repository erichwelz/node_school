var ls = require ('./lsmodule.js')

var dir = process.argv[2]
var ext = "." + process.argv[3]

ls(dir, ext, function(err, list){
if (err) {
  return console.log("error!", err)
  }
list.forEach(function(file){
  console.log(file);
  })
})