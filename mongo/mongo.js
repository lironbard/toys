const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://lironbard:igiigi47@cluster0.v8egm.gcp.mongodb.net/toys_liron?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("we're connected!");
});

module.exports = db;
