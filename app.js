const express = require('express')
const app = express()
const port = 3050

app.get('/', function(req, res){
  res.send("OK!");
});

app.listen(port, () => {
  console.log(`Healthcheck Listening at http://localhost:${port}`)
})