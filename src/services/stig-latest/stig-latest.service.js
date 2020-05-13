// Initializes the `stig-latest` service on path `/stig-latest`
const { StigLatest } = require('./stig-latest.class');
const createModel = require('../../models/stig-latest.model');
const hooks = require('./stig-latest.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/stig-latest', new StigLatest(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('stig-latest');

  service.hooks(hooks);
};
