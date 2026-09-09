

const express = require('express');
const app = express();

const {getDevices, getData, getMessages} = require('./handlers');

const mcp = require('./mcp');

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method, req.originalUrl, JSON.stringify(req.headers));
    next();
});

app.post('/public',  mcp);


app.get('/devices', getDevices);
app.get('/data', getData);
app.get('/messages', getMessages);


app.listen(7020, function() {
    console.log("\tport 7020 is open for business!");
});

