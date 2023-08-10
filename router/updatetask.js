var route = require("express").Router();
const dynamodb = require('../config')



route.put('/Todo/:id', (req, res) => {
    const productId = req.params.id;
    let product = {
        ProductId: { N: productId },
        TaskName: { S: req.body.name },
        Assign: { N: req.body.assign }
    };
    const params = {
        TableName: "Todo",
        Item: product
    };
    dynamodb.putItem(params, (err) => {
        if (err) {
            res.json(err);
        }
        res.json(`Successfully Updated Task ${productId}`);
    });
});






module.exports = route;
