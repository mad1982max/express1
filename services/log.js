module.exports.logger = (req, res, next) => {
    const message = {
        date: new Date().toLocaleString(),
        url: req.url,
        method: req.method
    };

    console.log(message);
    next();
};