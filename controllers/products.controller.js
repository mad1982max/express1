const MyErrors = require('../libs/error');
const model = require('../models/products.models');

module.exports.showAllProducts = (req, res, next) => {
    const answer = model.getAllProducts(req.query);
    if(answer.length === 0) {
        next(new MyErrors(404, 'Product not found', 'Products was not found with such params'))
    }
    else (
        res.json(answer)
    )
};