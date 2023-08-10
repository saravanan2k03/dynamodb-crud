var route = require("express").Router();
const dynamodb = require('../config')



route.put('/Todo/:id', (req, res) => {
    const productId = req.params.id;
    let product = {
        ProductId: { N: productId },
        TaskName: { S: req.body.name },
        Department:{S: req.body.department},
        Assign: { N: req.body.assign },
        Assignby: { N: req.body.assignby },

    };
    const params = {
        TableName: "Todo",
        Item: product
    };
    dynamodb.putItem(params, (err) => {
        if (err) {
            res.json(err);
        }
        res.json(`Task Updated successfully`);
    });
});






module.exports = route;
