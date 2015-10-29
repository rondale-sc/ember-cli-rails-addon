# EmberCLI Rails Addon

This is an integration piece between
[ember-cli-rails](https://github.com/rwz/ember-cli-rails/pull/25/files) (the
rubygem) and the EmberCLI applications they reference.  This addon is
responsible for the following

- Setting expected build variables without the user having to manipulate their
  EmberCLI app's `Brocfile`
- Creating lockfiles that `ember-cli-rails` tracks to ensure that requests halt
  until EmberCLI has had a chance to fully build
- Write build errors to a file so that `ember-cli-rails` can display them
  properly
- Exposes `dist/index.html` to Rails' asset pipeline in order to survive the
  cleanup after `rake assets:clean`
- Disabled [Subresource Integrity][SRI], since the asset pipeline URLs no longer
  match the URLs the SRI hashes were generated against.

[SRI]: https://github.com/jonathanKingston/ember-cli-sri#what-is-it
