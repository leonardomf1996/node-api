const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    
    // GET todos os docs do BD
    async index(req, res) {
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limit: 10 });
        return res.json(products);
    },

    // GET único doc
    async show(req, res) {
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    // CREATE um produto
    async store(req, res) {
        const product = await Product.create(req.body);
        return res.json(product);
    },

    // UPDATE de um produto
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, 
            req.body, 
            { new: true }
        );         
        return res.json(product);
    },
    
    // REMOVE produto
    async destroy(req, res) {
        await Product.findByIdAndDelete(req.params.id);
        return res.send();
    }
};
