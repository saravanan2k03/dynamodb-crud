var route = require("express").Router();
const dynamodb = require('../config')




route.delete('/Todo/:id', (req, res) => {
    const productId = req.params.id;
    const params = {
        TableName: "Todo",
        Key: {
            ProductId: { N: productId }
        }
    };
    dynamodb.deleteItem(params, (err) => {
        if (err) {
            res.json(err);
        }
        res.json(`Successfully Deleted Task ${productId}`);
    });
});

module.exports = route;
