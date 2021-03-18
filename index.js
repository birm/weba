const http = require('http');
const fs = require('fs')

const iconPath = "./favicon.png"

function returnFavIcon(res){
  var favicon = fs.createReadStream(iconPath);
  res.setHeader('Content-Type', 'image/png');
  favicon.pipe(res);
}

http.createServer(function (req, res) {

  console.log(req.url)
  if (req.url == "/favicon.ico"){
    returnFavIcon(res);
  } else {
    res.write('');
    console.log("nothing implemented")
    res.end();
  }
}).listen(4030);
