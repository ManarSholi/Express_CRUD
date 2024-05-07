const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/index', (request, response) => {
    response.sendFile(`${__dirname}/index.html`);
});

app.get('/process_get', (request, response) => {
    userDetail = {
        first_name: request.query.first_name,
        last_name: request.query.last_name
    };

    console.log("response: ", userDetail);
    response.end(JSON.stringify(userDetail));
});

app.get('/', (request, response) => {
    console.log('------------------ Got a GET request for the homepage ------------------');
    response.send('Hello GET');
});

app.post('/', (request, response) => {
    console.log('------------------ Got a POST request for the homepage ------------------');
    response.send('Hello POST');
});

app.delete('/del_user', (request, response) => {
    console.log('------------------ Got a DELETE request for /del_user  ------------------');
    response.send('Hello DELETE');
});

app.get('/list_user', (request, response) => {
    console.log('------------------ Got a POST request for /list_user   ------------------');
    response.send('Page Listing');
});

app.get('/ab*cd', (request, response) => {
    console.log('------------------ Got a GET request for /ab*cd        ------------------');
    response.send('Page Pattern Match');
});

let server = app.listen(8081, '127.0.0.1', () => {
    let serverAddress = server.address();
    let host = serverAddress.address;
    let port = serverAddress.port;

    console.log(`Example app listening at http://${host}:${port}`);
});
