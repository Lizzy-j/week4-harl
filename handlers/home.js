const fs = require("fs")
const path = require("path")
function homeHandler(req, res) {
  
  const filePath = path.join(__dirname, "..", "public", "homepage.html")
  fs.readFile(filePath, (err, file) => {
    if(err) {
      console.error(err)
      // 500 page
    } else {
      res.writeHead(200, {"content-type": "text/html"})
      res.end(file)
    }
  })
}

module.exports = homeHandler