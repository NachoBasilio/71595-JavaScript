const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  precio: Number,
  imagen: String
});

module.exports = mongoose.model('Product', productSchema);
