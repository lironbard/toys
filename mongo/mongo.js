const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://lironbard:*****@cluster0.v8egm.gcp.mongodb.net/toysliron?authSource=admin&replicaSet=atlas-f4rmk9-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true', { useNewUrlParser: true,useUnifiedTopology:true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("we're connected!");
});

module.exports = db;