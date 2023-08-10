var route = require("express").Router();
const dynamodb = require('../config')




route.delete('/Todo/:id', (req, res) => {
    const Id = req.params.id;
    const params = {
        TableName: "Todist",
        Key: {
            Id: { N: Id }
        }
    };
    dynamodb.deleteItem(params, (err) => {
        if (err) {
            res.json(err);
        }
        res.json(`Task Deleted `);
    });
});

module.exports = route;
