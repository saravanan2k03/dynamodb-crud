var route = require("express").Router();
const dynamodb = require('../config')




route.post('/Todo', (req, res) => {
    let Todo = {
        Id: { N: req.body.id },
        TaskName: { S: req.body.name },
        Department:{S: req.body.department},
        Assign: { N: req.body.assign },
        Assignby: { N: req.body.assignby },


    };
    const params = {
        TableName: "Todist",
        Item: Todo
    };
    dynamodb.putItem(params, (err) => {
        if (err) {
            res.json(err);
        }
        res.json(`Task Created`);
    });
});


module.exports = route;