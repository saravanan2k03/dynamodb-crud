const express = require('express');
const cors = require('cors');
const addtask = require('./router/addtask')
const readtask = require('./router/readtask')
const updatetask = require('./router/updatetask')
const deletetask = require('./router/deletetask')
const app = express();
app.use(cors());
app.use(express.json());

const apiport = 3000

app.use("/addtask", addtask);
app.use("/readtask", readtask);
app.use("/updatetask", updatetask);
app.use("/deletetask", deletetask);

app.listen(apiport, () => {
    console.log("Backend server is running" + " " + apiport);
  });