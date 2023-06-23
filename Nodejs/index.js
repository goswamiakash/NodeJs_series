const http = require('http');
const fs = require('fs');
const index = fs.readFileSync('index.html','utf-8');
// const data = fs.readFileSync('data.json','utf-8');

const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url=='/'){
        res.setHeader('Content-Type','text/plain');
        res.end('This is my home page');
    }
    else if(req.url=='/about'){
        res.setHeader('Content-Type','text/plain');
        res.end('This is my about page');
    }
    else if (req.url == '/Userapi') {
        res.setHeader('Content-Type', 'application/json');
        fs.readFile(`${__dirname}/data.json`, 'utf-8', (err, data) => {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end('Internal Server Error');
            } else {
                console.log(data);
                res.end(data);
            }
        });
    }
    else if(req.url=='/contact'){
        res.setHeader('Content-Type','text/plain');
        res.end('this is my contact page');
    }
    else{
        res.setHeader('Content-Type','text/plain');
        res.statusCode == 404;
        res.end('Page not found');
    }
    console.log('server strted');
    // res.setHeader('Dummy','DummyValue');
    // res.setHeader('Content-Type','text/plain');
    // res.setHeader('Content-Type','application/json');
    // res.end(data);

})
server.listen(8001);
