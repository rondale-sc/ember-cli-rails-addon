var Addon = require('../index');

QUnit.module('Addon index');

test('#included without RAILS_ENV', function() {
  delete process.env.RAILS_ENV;
  var app = {
    name: 'test-app',
    options: {},
  };

  Addon.included(app);

  equal(app.options.storeConfigInMeta, false, 'disables storeConfigInMeta');
});

test('#included with RAILS_ENV in development', function() {
  process.env.RAILS_ENV = 'development';
  var app = {
    name: 'test-app',
    env: 'development',
    options: {},
  };

  Addon.included(app);
  var fingerprint = app.options.fingerprint;

  ok(fingerprint.enabled, 'turns on fingerprinting');
  equal(fingerprint.prepend, '/assets/test-app/', 'prepends Sprockets path');
  equal(fingerprint.customHash, null, 'disables asset hashing');

  var appWithPrepend = {
    options: {
      fingerprint: {
        prepend: 'foo',
      }
    }
  };

  Addon.included(appWithPrepend);

  equal(appWithPrepend.options.fingerprint.prepend, 'foo', 'can be overridden');
});

test('#included with RAILS_ENV in production', function() {
  process.env.RAILS_ENV = 'production';
  var app = {
    env: 'production',
    options: {},
  };

  Addon.included(app);
  var fingerprint = app.options.fingerprint;

  equal(typeof fingerprint.customHash, 'undefined', 'uses default customHash');
});
