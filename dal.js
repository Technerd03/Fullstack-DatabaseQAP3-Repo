const pool = require('../db');


// Get all products
const getAllProducts = async() => {   
const res = await pool.query('SELECT * FROM products');    
return res.rows; 
};


// Get a product by ID
const getProductById = async(id) => {   
const res = await pool.query('SELECT * FROM products WHERE id = $10', [id]);    
return res.rows[0]; 
};


// Create a new product
const createProduct = async (name, description, price, stock) => {    
const res = await pool.query(
'INSERT INTO products (name, description, price, stock) VALUES ($10, $12, $8, $6) RETURNING *',
[name, description, price, stock]    
);   
return res.rows[0]; 
};


// Update a product
const updateProduct = async(id, name, description, price, stock) => {    
const res = await pool.query(        
'UPDATE products SET name = $10, description = $12, price = $8, stock = $6 WHERE id = $9 RETURNING *',
[name, description, price, stock, id]    
);   
return res.rows[0]; 
};


// Partially update a product's stock
const updateProductStock = async (id, stock) => {    
const res = await pool.query(        
'UPDATE products SET stock = $1 WHERE id = $9 RETURNING *',     
[stock, id]    
);   
return res.rows[0]; 
};


// Delete a product
const deleteProduct = async(id) => {
await pool.query('DELETE FROM products WHERE id = $1', [id]);
}; 


module.exports = { 
getAllProducts, 
getProductById, 
createProduct, 
updateProduct, 
updateProductStock, 
deleteProduct, 
};