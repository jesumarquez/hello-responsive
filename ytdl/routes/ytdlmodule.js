/*var fs = require('fs');
var ytdl = require('ytdl-core');*/

exports.download = function(req, res) {
    res.send([{name:'video'}, {name:'wine2'}, {name:'wine3'}]);
};

/*
var url = 'http://www.youtube.com/watch?v=A02s8omM_hI';

ytdl(url, { filter: function(format) { return format.container === 'mp4'; } })
  .pipe(fs.createWriteStream('video2.mp4'));
 */