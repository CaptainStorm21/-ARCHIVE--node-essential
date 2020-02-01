
const http = require  ('http');
    
const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');
    //write allows write some data into response
    res.write('<html>');
    res.write('<head><title>my first page</title></head>');
    res.write('<body><p>Hello this is from node</p></body>');
    res.write('</html>');

});

server.listen(3000);

