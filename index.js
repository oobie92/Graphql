const express = require('express'),
      bodyParser = require('body-parser'),
      { graphqlExpress, graphiqlExpress } = require('graphql-server-express'),
      schema = require('./schema'),

      app = express()
      
      require('./db/setup')
      
      app.use(
          '/graphql',
          bodyParser.json(), 
          graphqlExpress({
              schema
          }))

      app.use(
        '/graphiql',
        graphiqlExpress({
            endpointURL: '/graphql'
        }))    

      PORT = 5678
      app.listen(PORT, () => {
        console.log('Servidor corriendo OK')
      })

