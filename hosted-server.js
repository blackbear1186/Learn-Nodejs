"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.get('/', function (req, res) {
  res.send('Hello from Heroku!');
}); // Heroku will pass the port number on process.env.PORT

var PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
  console.log('App is listening on port ' + PORT);
});
