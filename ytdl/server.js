var express = require("express");
var ytdl = require("./routes/ytdlmodule")
var app = express();

app.get('/download', ytdl.download);
app.use(express.static(__dirname));

var server = app.listen(process.env.PORT, function () {

  var host = process.env.IP;
  var port = process.env.PORT;

  console.log('Example app listening at http://%s:%s', host, port)
});

