const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear un nuevo producto
router.post('/', async (req, res) => {
  const { titulo, descripcion, precio, imagen } = req.body;
  const product = new Product({
    titulo,
    descripcion,
    precio,
    imagen
  });
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Obtener un producto específico
router.get('/:id', getProduct, (req, res) => {
  res.json(res.product);
});

// Actualizar un producto
router.put('/:id', getProduct, async (req, res) => {
  const { titulo, descripcion, precio, imagen } = req.body;
  if (titulo != null) {
    res.product.titulo = titulo;
  }
  if (descripcion != null) {
    res.product.descripcion = descripcion;
  }
  if (precio != null) {
    res.product.precio = precio;
  }
  if (imagen != null) {
    res.product.imagen = imagen;
  }
  try {
    const updatedProduct = await res.product.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar un producto
router.delete('/:id', getProduct, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware para obtener un producto por su ID
async function getProduct(req, res, next) {
  let product;
  try {
    product = await Product.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.product = product;
  next();
}

module.exports = router;