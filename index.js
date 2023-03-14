const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    /*if(req.url === '/') {

        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': "text/html"});
            res.end(content);
        });
        
    }

    if(req.url === '/api/users') {

        const users = [
            { name: "Ida Kirveskoski", age: 23 },
            { name: "I. K", age: 22 }
        ];
        res.writeHead(200, {'Content-Type': "application/json"});
        res.end(JSON.stringify(users));
        /*fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': "text/html"});
            res.end(content);
        });
        
    }*/
    //console.log(req.url);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log("Server running on port " + PORT));

/*const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener', data));

logger.log("Hello World!");
logger.log("Hi!");
logger.log("It's me");


const Person = require('./person');

const person1 = new Person("Ida Kirveskoski", 23)

person1.greeting();*/