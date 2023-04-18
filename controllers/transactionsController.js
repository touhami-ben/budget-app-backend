const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions.js");

// index(all transactions)
transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

//create(get one new transaction)
transactions.post("/", (req, res) => {
  transactionsArray.push(req.body);
  res.status(201).json(transactionsArray[transactionsArray.length - 1]);
});
// show - get one 
transactions.get("/:id", (req, res) => {
  const id = req.params.id;
  if (transactionsArray[id]) {
    res.json(transactionsArray[id]);
  } else {
    res.status(404).json({error: "Item with ID not found"});
  }
});

//UPDATE
transactions.put("/:id", (req, res) => {
  const id = req.params.id;
  if (transactionsArray[id]) {
    transactionsArray[id] = req.body;
    res.status(200).json(transactionsArray[id]);
  } else {
    res.status(404).json({ error: "Item with ID not found" });
  }

});
//delete
transactions.delete("/:id", (req, res) => {
  const {id} = req.params;
  if(transactionsArray[id]){
    let deletedLog =transactionsArray.slice(id, 1);
    res.json(deletedLog)
  }else {
    res.status(404).json({ error: "Item with ID not found"})
  }
});





module.exports = transactions;
