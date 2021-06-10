const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let favList = [];

app.post("/favourites", (req, res) => {
  const favItem = req.body;
  favList.push(favItem);
  res.status(200).send(favList);
});

app.get("/favourites", (req, res) => {
  res.status(200).send(favList);
});

app.delete("/favourites", (req, res) => {
  const favItem = req.body;
  const item = favList.find((f) => f.id === favItem.id);
  const index = favList.indexOf(item);

  if (index > -1) {
    favList.splice(index, 1);
  }

  res.status(200).send(favList);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`port ${PORT} started...`);
});
