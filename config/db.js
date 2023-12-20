const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://patidardevelopersanjay:JyDAoKwoixhUD2zP@cluster0.uekkfrt.mongodb.net/mydb', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
module.exports = mongoose;
