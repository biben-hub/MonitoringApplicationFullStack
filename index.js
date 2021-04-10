require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 4000



app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(function(request,response, next) {
  response.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  response.header("Acces-Control-Allow-Origin","*")
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
const Pool = require('pg').Pool
const { request } = require('http')
const { response } = require('express')
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
    port: 5432
    
  })


app.get('/users',(request, response) => {
    pool.query('SELECT * FROM users', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  })

app.get('/connection', (request,response) => {
    pool.query()
})

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })



  

