var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;

  console.log(url.parse(_url, true).pathname);

  if(pathname === '/'){ //홈 과 페이지를 구분 할 수 없다.
    if(queryData.id===undefined){
      fs.readdir('./data', function(error, filelist){
        console.log(filelist);
        var title = 'WELCOME';
        var description = '감다영 똥꼬 부농똥꼬';
        var list='<ul>';
        var i = 0;
        while (i < filelist.length){
          list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
          i+=1;
        }
        list = list+'</ul>';
        var template = `
        <!doctype html>
        <html>
        <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
        </head>
        <body>
        <h1><a href="/">WEB</a></h1>
        ${list}

        <h2>${title}</h2>
        <p>${description}</p>
        </body>
        </html>
        `;
        response.writeHead(200);
        response.end(template);
      });
    }

    else {
      fs.readdir('./data', function(error, filelist){
        console.log(filelist);
        var title = 'WELCOME';
        var description = '감다영 똥꼬 부농똥꼬';
        var list='<ul>';
        var i = 0;
        while (i < filelist.length){
          list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
          i+=1;
        }
        list = list+'</ul>';
        fs.readFile(`DATA/${queryData.id}`, 'utf8',
        function(err, description){
          var title = queryData.id;
          var template = `
          <!doctype html>
          <html>
          <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
          </head>
          <body>
          <h1><a href="/">WEB</a></h1>
          ${list}
          <h2>${title}</h2>
          <p>${description}</p>
          </body>
          </html>
          `;
          response.writeHead(200);
          response.end(template);
        });
      });
    }
    fs.readdir('./data', function(error, filelist){
      console.log(filelist);
      var title = 'WELCOME';
      var description = '감다영 똥꼬 부농똥꼬';
      var list='<ul>';
      var i = 0;
      while (i < filelist.length){
        list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
        i+=1;
      }
      list = list+'</ul>';
      fs.readFile(`DATA/${queryData.id}`, 'utf8',
      function(err, description){
        var title = queryData.id;
        var template = `
        <!doctype html>
        <html>
        <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
        </head>
        <body>
        <h1><a href="/">WEB</a></h1>
        ${list}
        <h2>${title}</h2>
        <p>${description}</p>
        </body>
        </html>
        `;
        response.writeHead(200);
        response.end(template);
      });
    });
  }
  else{
    response.writeHead(404);
    response.end("Not found");
  }
});
app.listen(3000);
