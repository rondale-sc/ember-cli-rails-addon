var Addon = require('../index');

QUnit.module('Addon index');

test('included with default options', function() {
  var app = {
    options: {},
  };

  Addon.included(app);

  ok(!app.options.storeConfigInMeta, 'disables storing config in `<meta>`');
  ok(app.options.fingerprint.generateAssetMap, 'generates `assetMap.json`');
});

test('overrides options', function() {
  var app = {
    options: {
      storeConfigInMeta: true,
      fingerprint: {
        generateAssetMap: false,
      }
    },
  };

  Addon.included(app);

  ok(!app.options.storeConfigInMeta, 'disables storing config in `<meta>`');
  ok(app.options.fingerprint.generateAssetMap, 'generates `assetMap.json`');
});
