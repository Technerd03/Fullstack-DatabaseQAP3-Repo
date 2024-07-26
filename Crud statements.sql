SELECT*FROM products;
-- Insert a new product

INSERT INTO products (name, description, price, stock)
VALUES('Baked goods','Description1', 9.99, 100);

-- Update an existing product
UPDATE products 
SET name = 'Red velvet brownies', description = 'UpdatedDescription', price = 12.99, stock = 150 
WHERE id = 1;

-- Delete a product
DELETE FROM products 
WHERE id = 1;