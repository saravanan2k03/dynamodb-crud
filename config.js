const aws = require("aws-sdk");

aws.config.update({
  region: "ap-southeast-2",
  endpoint: "http://localhost:8000"
});
var dynamodb = new aws.DynamoDB();
// var params = {
//     TableName : "Products",
//     KeySchema: [
//         { AttributeName: "ProductId", KeyType: "HASH"},
        

// ],
//     AttributeDefinitions: [
//         { AttributeName: "ProductId", AttributeType: "N" },
        
// ],
//     ProvisionedThroughput: {
//         ReadCapacityUnits: 5,
//         WriteCapacityUnits: 5
//     }
// };
// dynamodb.createTable(params, function(err, data) {
//     if (err) {
//         console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
//     } else {
//         console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
//     }
// });

module.exports = dynamodb