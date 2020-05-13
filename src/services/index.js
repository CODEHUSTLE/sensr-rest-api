const users = require('./users/users.service.js');
const stigLatest = require('./stig-latest/stig-latest.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(stigLatest);
};
