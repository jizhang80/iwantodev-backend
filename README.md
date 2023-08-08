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

# local env installation/configuration
1. [Install Node.js](https://nodejs.org/en)
2. ```$ npm init```
3. ```$ npm install express```[Express Installation](https://expressjs.com/en/starter/installing.html)
4. start node server by sample 
    ##### config server.js
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
    
    ###### start server
    ```$ node server.js```
5. install tools
    ##### mongoose for mongodb ORM
    ```$ npm install mongoose```
    
    ##### dotenv for local env parameters
    ```npm install dotenv```
