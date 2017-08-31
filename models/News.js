var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create News schema
var NewsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  imageurl: {
    type: String,
    required: true
  }
});

var News = mongoose.model("News", newsSchema);

// Export the model
module.exports = News;