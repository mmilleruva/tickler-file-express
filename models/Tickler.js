var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TicklerSchema = new Schema({
  userId: Schema.Types.ObjectId,
  desc: String,
  cat: String,
});

module.exports = mongoose.model('tickler', TicklerSchema);
