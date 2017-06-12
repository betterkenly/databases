var db = require('../db');

module.exports = {
  messages: {
    get: function (res, statusCode) {
      res.writeHead(statusCode, {'Content-Type': 'application/json'});
      res.end(); // TODO get data from db
    }, // a function which produces all the messages
    post: function (req, res, statusCode) {
      let result = '';
      req.on('data', data => {
        res += data;    
      });
      
      req.on('end', () => {
        // TODO insert data to db
        res.writeHead(statusCode, null);
        res.end();
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

