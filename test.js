const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const { expect } = chai;

chai.use(chaiHttp);

describe('Martha’s Good Eats Product API', () => {

    // Test for getting all products
    it('As a customer, I can see a web page listing all products from the database', (done) => {
        chai.request(app)
            .get('/products')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                done();
            });
    });

    // Test for getting a specific product
    it('As a business partner, I can fetch all products from the database from a REST API. The records will be returned as JSON data.', (done) => {
        chai.request(app)
            .get('/api/products')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                done();
            });
    });

    // Test for creating a new product
    it('As a staff member, I can see a web page that will allow me to add a new item to the products of the database.', (done) => {
        chai.request(app)
            .post('/api/products')
            .send({ name: 'New Product', description: 'Delicious new product', price: 9.99, stock: 100 })
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.have.property('name', 'New Product');
                done();
            });
    });

    // Test for updating a product
    it('As a staff member, I can update an existing product in the database.', (done) => {
        chai.request(app)
            .put('/api/products/1')
            .send({ name: 'Updated Product', description: 'Updated description', price: 19.99, stock: 150 })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('name', 'Updated Product');
                done();
            });
    });

    // Test for partially updating a product's stock
    it('As a staff member, I can partially update the stock of an existing product in the database.', (done) => {
        chai.request(app)
            .patch('/api/products/1')
            .send({ stock: 200 })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('stock', 200);
                done();
            });
    });

    // Test for deleting a product
    it('As a staff member, I can delete a product from the database.', (done) => {
        chai.request(app)
            .delete('/api/products/1')
            .end((err, res) => {
                expect(res).to.have.status(204);
                done();
            });
    });
});