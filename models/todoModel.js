var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database connected');
});


var todoSchema = {
    task: {
        type: String,
        required: true
    }
}


module.exports = mongoose.model('Todo', todoSchema);