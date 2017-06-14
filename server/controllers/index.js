var models = require('../models');
var url = require('url');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get( (result) => {
        res.json(result);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
       var params = [];
       models.messages.post( params, (result) => {
         res.json(result);    
       }); 
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
        models.users.get( (result) => {
          res.json(result);
        });
    },
    post: function (req, res) {
        var params = [];
        models.users.post( params, (result) => {
          res.json(result);
        });
    }
  }
};

