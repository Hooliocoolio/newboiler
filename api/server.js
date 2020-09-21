/*  import dependencies   */
const express = require('express')
const helmet  = require('helmet')
const cors   = require('cors')
/*  api router  */
const ar = require('./ar.js')
/*  cookie-parser  */
const cp = require('cookie-parser')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(cp())

server.use('/api', ar)

server.get('/', (req, res) => {
    return res.status(200).json({
        Message: "Api is working as it should."
    })
})

module.exports = server;