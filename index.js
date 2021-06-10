const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json())


let favList = [];

app.post("/favourites", (req, res) => {
console.log("body",req.body)

console.log("item",req.body.item)
console.log("data",req.body.data)
  // const id = parseInt(req.body.id);
  // const name = req.body.item;
  const favItem = req.body.item

  favList.push(favItem);
  res.status(200).send(favList);
});

app.get("/favourites", (req, res) => {
  res.status(200).send(favList);
});

app.delete("/favourites", (req, res) => {
  const id = parseInt(req.body.id);

  const favItem = favList.find(f => f.id === id);
  
  
  const index = favList.indexOf(favItem);
  console.log("index",index)
  if (index > -1) {
    favList.splice(index, 1);
  }

  res.status(200).send(favList);
});

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`port ${PORT} started...`);
});
