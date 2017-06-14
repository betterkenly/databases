var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      let queryString ="select messages.id, messages.text, messages.roomname from messages \
                        left outer join users on (messages.userid = usersid) \
                        order by messages.id desc";
      db.query(queryString, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          callback(result);
        }
      });
    }, // a function which produces all the messages
    post: function (params, callback) {
        let queryString ="insert into messages(text, userid, roomname)\
                          values (?, (select id from users where userid = ? limit 1), ?)";
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
        let queryString = 'select * from users';
        db.query(queryString, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            callback(result);
          }
      });
    },
    post: function (params, callback) {
        let queryString = 'insert into users(username) values (?)';
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
