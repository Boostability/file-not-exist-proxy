var AWS = require('aws-sdk');
var http = require('http');
var s3 = new AWS.S3();

let params = {
    Bucket: process.env.BUCKET || '',
    Key: process.env.INSTANCEID || ''
};

http.createServer((req, res) => {
    s3.getObject(params, (err, data) => {
        err ? res.writeHead(200) : res.writeHead(500);
        res.end();
    });
}).listen(parseInt(process.env.PORT) || 8080);
