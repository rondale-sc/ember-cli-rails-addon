# EmberCLI Rails Addon

This is an integration piece between the [ember-cli-rails] gem and the
EmberCLI applications the Rails applications serve.

This addon is responsible for:

- preprending Sprockets-ready paths to asset URLs. Unless already specified,
  the addon will default to prepending `${HOST}/assets/${NAME}/`, where `NAME`
  is determined by the `name` specified in the application's `package.json`,
  and `HOST` is determined in the following order:

  1. `process.env.ASSET_HOST` (usually set for [Rails' Asset Pipeline][asset-host])
  1. `process.env.CDN_HOST` (usually set for Rails' Asset Pipeline)
  1. `app.options.origin` (see [ember-cli-sri][origin])

[asset-host]: https://robots.thoughtbot.com/dns-cdn-origin#making-it-work-with-rails
[origin]: https://github.com/jonathanKingston/ember-cli-sri#configure

- setting expected build variables without the user having to manipulate their
  EmberCLI app's `ember-cli-build.js`
- creating lockfiles that `ember-cli-rails` tracks to ensure that requests halt
  until EmberCLI has had a chance to fully build
- writing build errors to a file so that `ember-cli-rails` can display them
  as Rails errors.

[ember-cli-rails]: https://github.com/thoughtbot/ember-cli-rails
[SRI]: https://github.com/jonathanKingston/ember-cli-sri#what-is-it
