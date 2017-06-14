var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      let queryString ='';
      db.query(queryString, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          callback(result);
        }
      });
    }, // a function which produces all the messages
    post: function (params, callback) {
        let queryString ='';
        db.query(queryString, params, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            callback(params, result);
          }
        });
      } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
        let queryString = '';
        db.query(queryString, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            callback(result);
          }
      });
    },
    post: function (params, callback) {
        let queryString = '';
        db.query(queryString, params, (err, result) => {
           if (err) {
            console.log(err)
           } else {
            callback(params, result);
           }
      });
    }
  }
};
