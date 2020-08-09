const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/toys_liron', { useNewUrlParser: true,useUnifiedTopology:true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("we're connected!");
});

module.exports = db;