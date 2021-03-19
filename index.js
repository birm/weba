const http = require('http');
const fs = require('fs')
const rdf = require('rdf');

const namespace = process.env.NS || "http://rbirm.us/";

const iconPath = "./favicon.png";

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
    const node = new rdf.NamedNode(namespace)
    console.log()
    res.write(node.toNT().toString());
    res.end();
  }
}).listen(4030);
