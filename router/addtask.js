var route = require("express").Router();
const dynamodb = require('../config')




route.post('/Todo', (req, res) => {
    let product = {
        ProductId: { N: req.body.id },
        TaskName: { S: req.body.name },
        Assign: { N: req.body.assign },
    };
    const params = {
        TableName: "Todo",
        Item: product
    };
    dynamodb.putItem(params, (err) => {
        if (err) {
            res.json(err);
        }
        res.json(`Successfully created Task ${req.body.id}`);
    });
});


module.exports = route;