const mongoose = require('mongoose')

const databaseName = 'themepark'
const connectionString = `mongodb://127.0.0.1/${databaseName}`

mongoose
    .connect(connectionString)
    .then(connectionInfo => console.log(`Hey! -> Connected to Mongo! Database name: "${connectionInfo.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))