const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    updateProductStock,
    deleteProduct,
} = require('../dal');
 

// Route to get all products
router.get('/', async (req, res) => {
    const products = await getAllProducts();
    res.json(products);
});
 

// Route to get a product by ID
router.get('/:id', async (req, res) => {
    const product = await getProductById(req.params.id);
    res.json(product);
});
 

// Route to create a new product
router.post('/', async (req, res) => {
    const { name, description, price, stock } = req.body;
    const newProduct = await createProduct(name, description, price, stock);
    res.status(201).json(newProduct);
});
 

// Route to update a product by ID
router.put('/:id', async (req, res) => {
    const { name, description, price, stock } = req.body;
    const updatedProduct = await updateProduct(req.params.id, name, description, price, stock);
    res.json(updatedProduct);
});
 

// Route to partially update a product's stock by ID
router.patch('/:id', async (req, res) => {
    const { stock } = req.body;
    const updatedProduct = await updateProductStock(req.params.id, stock);
    res.json(updatedProduct);
});
 

// Route to delete a product by ID
router.delete('/:id', async (req, res) => {
    await deleteProduct(req.params.id);
    res.status(204).send();
});
 
module.exports = router;