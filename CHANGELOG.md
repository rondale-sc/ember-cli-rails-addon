master
------

* Disable EmberCLI minification (closes [thoughtbot/ember-cli-rails#123][123] and
  [thoughtbot/ember-cli-rails#124][124])

[123]: https://github.com/thoughtbot/ember-cli-rails/pull/123
[124]: https://github.com/thoughtbot/ember-cli-rails/pull/124

0.0.13
------

* Disables [Subresource Integrity][SRI], since the asset pipeline URLs no longer
  match the URLs the SRI hashes were generated against.
* Copies `dist/index.html` to `dist/assets/index.html` after a build

[SRI]: https://github.com/jonathanKingston/ember-cli-sri#what-is-it
