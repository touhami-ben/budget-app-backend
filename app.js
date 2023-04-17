//DEPENDENCIES
const express = require("express") //import
const transactionsController = require("./controllers/transactionsController");
const cors = require("cors")
//CONFIG
const app = express();//initialize new app


//  MIDDLEWARE
app.use(express.json());
app.use(cors());
//  Routes
 app.get("/", (req, res) => {
    res.send("welcome to Budget app! For docs, Please visit...")
 });
 app.use("/transactions", transactionsController);

 app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found"})
 })
//EXPORT
module.exports = app;