'use strict';

const app = require('express')();

const PORT = process.env.PORT || 3000;

app.get('/hello', (req, res) => {
  const name = req.query.name;
  const msg = '<h1>Hello World!</h1>'
    '<h2>Goodbye World</h2>';
  res.writeHead(200, {
      'Content-Type': 'text/html'
    });

    msg.split('').forEach((char, i) => {
      setTimeout(() => {
        res.write(char);
      }, 1000 * i);
    });

    setTimeout(() => {
      res.end();
    }, msg.length * 1000 + 2000);
});

app.get('/random', (req, res) => {
  res.send(Math.random().toString());
});

app.get('/random/:min/:max', (req, res) => {
  const min = req.params.min;
  const max = req.params.max;

  res.send(getRandomInt(+min, +max).toString());
});

app.get('/cal', (req, res) => {
  const month = require('node-cal/lib/month');
  console.log(month);
});

app.get('/secret', (req, res) => {
  res
  .status(403)
  .send('Access Denied!');
});

app.listen(PORT, () => {
    console.log(`Node.js server started Listening on port ${PORT}`)
});



  //http.createServer((req, res) => {
  //console.log(req.method, req.url);

  //if (req.url === '/hello') {
    //const msg = '<h1>Hello World!</h1>'
    //'<h2>Goodbye World</h2>';
    //res.writeHead(200, {
      //'Content-Type': 'text/html'
    //});

    //const events = [];

    //msg.split('').forEach((char, i) => {
      //const event= setTimeout(() => {
        //res.write(char);
        //events.pop();
      //}, 1000 * i);
      //events.push(i);
    //});

    //setInterval(() => {
      //if(!events.length) {
      //res.end();
      //}
    //}, 1000);
  //} else if (req.url === '/random') {
    //res.end(Math.random().toString());
  //}else {
    //res.writeHead(403);
    //res.end('Access Denied!');
  //}
//})

