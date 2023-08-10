var route = require("express").Router();
const dynamodb = require('../config')



route.get('/Todo', (req, res) => {
    const params = {
        TableName: "Todist", 
    };
    dynamodb.scan(params, (err, data) => {
        if (err) {
            res.json(err);
        } else {
            res.json(data.Items || []); 
        }
    });
});

module.exports = route;