# Project Title

Router

## Getting Started

This is Router application. It automaticly detect window.history support by browsers. If browser doesen't support history mode it switches to hash mode.

### Prerequisites

Server with SPA redirect to index.html support.
You need Example Server Configurations to run this app in production:

### Apache
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Native Node.js
```
const http = require('http')
const fs = require('fs')
const httpPort = 80

http.createServer((req, res) => {
  fs.readFile('index.htm', 'utf-8', (err, content) => {
    if (err) {
      console.log('We cannot open "index.htm" file.')
    }

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    })

    res.end(content)
  })
}).listen(httpPort, () => {
  console.log('Server listening on: http://localhost:%s', httpPort)
})
```
### Installing

Clone or copy this project into Your localmachine, install dependiences, run developers mode npm start.


## CLI Commands

npm start - run app in developers mode
npm test - test app
npm dev - build not minify version
npm prod - build minify version

## Built With

* JS (ES6)


## Authors

* **Piotr Kulpa** - [Router](https://github.com/PiotrKulpa/router)


## License

This project is licensed under the MIT License - see the [LICENSE.md](https://en.wikipedia.org/wiki/MIT_License) file for details
