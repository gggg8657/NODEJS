var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

function templateHTML(title, list, body){
  return `
  <!doctype html>
  <html>
  <head>
  <title>WEB1 - ${title}</title>
  <meta charset="utf-8">
  </head>
  <body>
  <h1><a href="/">WEB</a></h1>
  ${list}
  <a href="/create">create</a>
  ${body}
  </body>
  </html>
  `;
}
function templateLIST(filelist){
  var list='<ul>';
  var i = 0;
  while (i < filelist.length){
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i+=1;
  }
  list = list+'</ul>';
  return list;
}

var app = http.createServer(function(request,response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;

  //console.log(url.parse(_url, true).pathname);
  //console.log(pathname);
  if(pathname === '/'){ //홈 과 페이지를 구분 할 수 없다.
    if(queryData.id===undefined){
      fs.readdir('./data', function(error, filelist){
        //console.log(filelist);
        var title = 'WELCOME';
        var description = 'Hello, Node.js';
        var list=templateLIST(filelist);
        var template = templateHTML(title, list, `<h2>${title}</h2><p>${description}</p>`);
        response.writeHead(200);
        response.end(template);
      });
    }

    else {
      fs.readdir('./data', function(error, filelist){
        //console.log(filelist);
        fs.readFile(`DATA/${queryData.id}`, 'utf8',
        function(err, description){
          var title = queryData.id;
          var list=templateLIST(filelist);
          var template = templateHTML(title, list, `<h2>${title}</h2><p>${description}</p>`);
          response.writeHead(200);
          response.end(template);
        });
      });
    }
  }
  else if(pathname === '/create'){
    fs.readdir('./data', function(error, filelist){
      //console.log(filelist);
      var title = 'WEB - create';
      var list=templateLIST(filelist);
      var template = templateHTML(title, list, `
        <form action="http://localhost:3000/create_process" method="post">
            <p><input type="text" name="title" placeholder="title"></p>
            <p>
              <textarea name="description" placeholder="description"></textarea>
            </p>
            <p>
              <input type="submit">
            </p>
        </form>
        `);
        response.writeHead(200);
        response.end(template);
      });
    }
    // post 방식으로 전송된 데이터를 node js 로 가져오는 방법은 뭘까? -> 이해 하지 말고 그냥 익숙하게 가자.
    else if(pathname ==='/create_process')
    {
      var body = '';
      //node js 에서는 post 방식을 전송된 데이터가 많을 경우에 어떤 특정한 양만큼을 수신할 때마다, 서버는 callback 함수를 호출하도록 약속되어있다.
      //수신한 정보를 주는것.
      request.on('data', function(data){
        body = body + data;
          //이 콜백 함수가 실행 될 때마다 데이터를 body 에 추가하는 기능
      });
      request.on('end', function(){
        //end 에 해당되는 콜백인 fucntio() 이 실행되면?
        var post = qs.parse(body);
        //post 에 정보 넣기.
        console.log(post);

        var title = post.title;
        var description = post.description;
        fs.writeFile(`data/${title}`, description, 'utf8', function(err){
          response.writeHead(302, {Location:`/?id=${title}`});//302 is redirection the site
          response.end("success");
        })
        console.log(`${title} , ${description}`);
      });

    }
    else {
      response.writeHead(404);
      response.end("Not found");
    }
  });
  app.listen(3000);
