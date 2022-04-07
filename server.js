const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
require('dotenv').config()
require('./config/database')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)

app.use(logger('dev'))
app.use(express.json())

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

// Put API route here before 'catch all' route
app.use('/api/users', require('./routes/api/users.js'))


// Catch all route
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

io.on('connection', (socket) => {
    console.log('a user is connected')
    socket.on('join chat', (room) => {
        socket.join(room)
        console.log('User joined room: ' + room)
    })
    socket.on('new message', (convoObj) => {
        console.log('new message socket hit')
        socket.to(convoObj._id).emit('message recieved', convoObj)
    })
})

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

server.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});