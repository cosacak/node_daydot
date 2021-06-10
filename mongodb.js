// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://daydotUser:123456Dayd0t.@cluster0.q3rbk.mongodb.net/daydotDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("daydotDatabase").collection("testCollection");
//   // perform actions on the collection object
//   console.log("connected")
//   console.log(collection)
//   client.close();
// });

const mongoose = require("mongoose");

const uri =
  "mongodb+srv://daydotUser:123456Dayd0t.@cluster0.q3rbk.mongodb.net/daydotDatabase";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Connection error", err));
