var db = require('../config/db');

var testSchema = db.Schema({
  title: String,
  body_html: String,
  body_text: String,
  updated_at: { type: Date, default: Date.now }
});

var Test = db.model('Test', testSchema);

module.exports = Test;
