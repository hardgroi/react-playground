// Packages
import path from 'path'
import express from 'express'

// Initialize Servr
let app = express()

// Set Headers
app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Cache-Control', 'no-cache')
    return next()
})

// Set Static Path
console.info(path.resolve(__dirname))
app.use(express.static(path.resolve(__dirname)))

// Setup Main Route for everything else
app.route('*')
    .get((req, res) => {
        res.status(200).sendFile(path.resolve(__dirname, 'index.html'))
    })

// Set Server to Listen
app.listen(3000, 'localhost', (err) => {
    (err) ?
    console.error(err):
        console.info('*** Express Server @ http://%s:%s', '*', '3000')
})