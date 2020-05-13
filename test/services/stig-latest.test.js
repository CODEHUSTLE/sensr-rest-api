const assert = require('assert');
const app = require('../../src/app');

describe('\'stig-latest\' service', () => {
  it('registered the service', () => {
    const service = app.service('stig-latest');

    assert.ok(service, 'Registered the service');
  });
});
