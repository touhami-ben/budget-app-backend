const express = require("express") //import
const app = express();//initialize new app
const cors = require("cors")

app.use(express.json());
app.use(cors());

 app.get("/", (req, res) => {
    res.send("welcome to Budget app! For docs, Please visit...")
 })
//EXPORT
module.exports = app;