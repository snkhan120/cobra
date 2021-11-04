const mongoose = require('mongoose');

const url = "mongodb+srv://dbRoot:T!C3kU87icfY-!2@cobra.koqda.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true });

const connection = mongoose.connection;

// app.use(express.json());

try {
    connection.on('open', () => {
        console.log('mongoose connected');
    })
} catch (error) {
    console.log("mongoose Error: " + error);
}

module.exports = connection;