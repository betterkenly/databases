var models = require('../models');
var url = require('url');

module.exports = {
  messages: {
    get: function (req, res) {
      let pathname = url.parse(req.url).pathname;
      if (pathname === '/classes/messages') {
        models.messages.get(res, 200);
      } else {
        models.messages.get(res, 404);
      }
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req, res, 201);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

