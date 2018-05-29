const { Model } = require('objection'),
      knexConfig = require('./knexfile'),
      Knex = require('knex'),

      knex = Knex(knexConfig.development)
      Model.knex(knex)
