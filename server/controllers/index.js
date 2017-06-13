var models = require('../models');
var url = require('url');

module.exports = {
  messages: {
    get: function (req, res) {
      let pathname = url.parse(req.url).pathname;
      console.log(models);
      models[pathname].get(req.body, function(err, data){
        if (data.length === 0) {
          res.end();
        } else {
          res.end(JSON.stringify(data));
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      let pathname = url.parse(req.url).pathname;
      model[pathname].post(req.body);
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      let pathname = url.parse(req.url).pathname;

      models[pathname].post(req.body);
      res.end();
    }
  }
};

