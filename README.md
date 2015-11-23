# EmberCLI Rails Addon

This is an integration piece between the [ember-cli-rails] gem and the
EmberCLI applications the Rails applications serve.

This addon is responsible for:

- preprending Sprockets-ready paths to asset URLs. Read the [configuration]
  section to learn how to hook into the Asset Pipeline's `asset_host`.
- setting expected build variables without the user having to manipulate their
  EmberCLI app's `ember-cli-build.js`
- creating lockfiles that `ember-cli-rails` tracks to ensure that requests halt
  until EmberCLI has had a chance to fully build
- writing build errors to a file so that `ember-cli-rails` can display them
  as Rails errors.

[configuration]: #configuration
[ember-cli-rails]: https://github.com/thoughtbot/ember-cli-rails
[SRI]: https://github.com/jonathanKingston/ember-cli-sri#what-is-it

## Configuration

* `prepend` - This value will be used to generate the proper URL for
  EmberCLI-generated assets. For an app named `frontend`, with `prepend` set
  to `https://example.com`, the resulting URLs will be prepended with
  `https://example.com/assets/frontend`:
* `prefix` - This value corresponds to Rails' [`config.assets.prefix`][prefix].
  To match Rails, it defaults to `assets`.

[prefix]: http://guides.rubyonrails.org/asset_pipeline.html#precompiling-assets

```js
// ember-cli-build.js

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-cli-rails': {
      prepend: 'https://example.com',
      prefix: EmberApp.env() + '/assets',
    }
  });

  // ...
};
```
