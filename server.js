const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');


const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  
  else if (page == '/api') {
    if('student' in params){
      //computerChoice function
      if(params['student']== 'leon'){
        let computerChoice = Math.random()*3
        if (computerChoice >= 2) {
          computerChoice = "rock"
        } else if (computerChoice >= 1) {
          computerChoice = "paper"
        } else {
          computerChoice = "scissors"
        }
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: computerChoice,
          img: `/images/${computerChoice}.png`
        }
        res.end(JSON.stringify(objToJson));
      }//computerChoice function
    }// end of student in params
    //choice in params
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  } else if (page == '/images/rock.png'){
    fs.readFile('images/rock.png', function(err, data) {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.write(data);
        res.end();
    });
} else if (page == '/images/paper.png'){
    fs.readFile('images/paper.png', function(err, data) {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.write(data);
        res.end();
    });
} else if (page == '/images/scissors.png'){
    fs.readFile('images/scissors.png', function(err, data) {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.write(data);
        res.end();
    });
} //else{
  //   figlet('404!!', function(err, data) {
  //     if (err) {
  //         console.log('Something went wrong...');
  //         console.dir(err);
  //         return;
  //     }
  //     res.write(data);
  //     res.end();
  //   });
  // }
});

server.listen(8000);
