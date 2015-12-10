# EmberCLI Rails Addon

This is an integration piece between the [ember-cli-rails] gem and the
EmberCLI applications the Rails applications serve.

This addon is responsible for:

- [exposing an initializer][initializer] for sending Rails' CSRF tokens
- setting expected build variables without the user having to manipulate their
  EmberCLI app's `ember-cli-build.js`
- creating lockfiles that `ember-cli-rails` tracks to ensure that requests halt
  until EmberCLI has had a chance to fully build
- writing build errors to a file so that `ember-cli-rails` can display them
  as Rails errors.

[initializer]: app/initializers/ember-cli-rails-addon-csrf.js
[ember-cli-rails]: https://github.com/thoughtbot/ember-cli-rails
