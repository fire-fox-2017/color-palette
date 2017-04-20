var express = require("express");
var app = express();
var getPallete = require('./lib/get_pallete')

app.set('view engine', 'jade');

app.get("/", function (req, res) {
  function getPallete(arr){
    return arr
  }
  res.render("index", { palette:  });
});

console.log("Server runing on http://localhost:9000")
app.listen(9000);
