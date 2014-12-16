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
  properly [under developmen]
