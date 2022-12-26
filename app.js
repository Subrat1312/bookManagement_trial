const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
require('dotenv').config()

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

const PORT=process.env.PORT || 5000
mongoose
  .connect(
   'mongodb+srv://admin:Subrat12@cluster0.qchimot.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => console.log(err));
