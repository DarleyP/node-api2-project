// require your server and launch it here

const server = require('./api/server')

const Port = 5000


server.listen(Port, () => {
    console.log('listening on ', Port)
})