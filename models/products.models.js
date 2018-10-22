const products = require('../db/products');
let productsArr = products.slice();

module.exports.getAllProducts = (queryObj) => {
    const patterns = Object.keys(queryObj);
    if (patterns.length === 0) {
        return productsArr;
    } else {
        let resultArr = productsArr;
        patterns.forEach(pattern => {
            resultArr = resultArr.filter(product => product[pattern].startsWith(queryObj[pattern]))
        });
        return resultArr;
    }
};