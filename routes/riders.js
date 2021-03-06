const express = require('express')
const router = express.Router()
const knex = require('../database-connection')
const queries = require('../queries')

router.get('/', (req, res) => {
  queries.getAllRiders()
  .then(riders => {
    res.status(200).json({riders})
  })
})

router.get('/:id', (req, res) => {
  queries.viewRider(req.params.id)
  .then(rider => {
    res.status(200).json({rider})
  })
})
