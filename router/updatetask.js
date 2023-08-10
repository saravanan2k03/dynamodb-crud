var route = require("express").Router();
const dynamodb = require('../config')



route.put('/Todo/:id', (req, res) => {
    const Ids = req.params.id;
    let Todo = {
        Id: { N: Ids },
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
        res.json(`Task Updated successfully`);
    });
});






module.exports = route;
