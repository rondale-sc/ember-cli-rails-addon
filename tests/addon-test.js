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
        prepend: 'example.com/',
      }
    }
  };

  Addon.included(appWithPrepend);

  equal(appWithPrepend.options.fingerprint.prepend, 'example.com/', 'can be overridden');

  var appWithAddonConfig = {
    name: 'test-app',
    options: {
      'ember-cli-rails': {
        prepend: 'https://example.com',
        prefix: '/staging/assets',
      }
    }
  };

  Addon.included(appWithAddonConfig);

  equal(
    appWithAddonConfig.options.fingerprint.prepend,
    'https://example.com/staging/assets/test-app/',
    'asset host can be configured'
  );
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
