const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookname: {
    type: String,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
  stock: {
    type: Number
    
  },
});

const bookmodel = mongoose.model("book", bookSchema);
module.exports = bookmodel;
