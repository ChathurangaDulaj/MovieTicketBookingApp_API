var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var movieSchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  poster: String,
  genre: String,
  days: Array,
  times: Array,
});

module.exports = mongoose.model('movie', movieSchema);
