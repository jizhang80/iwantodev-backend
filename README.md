# iwantodev-backend
expressjs backend server with MongoDB

author: Ji Zhang (Jimmy.Z)  

# application structure
* ```/router```    the main app router and business logical
* ```/model```     data model define with mongoose
* ```/middleware```  app tools
* ```/config```    databases, or something else config
* ```server.js```  system entrance
* ```app.js```     system integration

# installation
## [Express Installation](https://expressjs.com/en/starter/installing.html)

* 1 [Install Node.js](https://nodejs.org/en)
* 2 ```$ npm init```
* 3 ```$ npm install express```

## config server.js
```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

## start server
```$ node server.js```

## install mongoose
```$ npm install mongoose```

## install dotenv for local env parameters
```npm install dotenv```
