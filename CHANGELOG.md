master
------

0.10.0
-----

* Bump version for the release of [`ember-cli-rails@0.10.0`][#477]

[#477]: https://github.com/thoughtbot/ember-cli-rails/issues/477

0.9.0
-----

* Bump version for the release of [`ember-cli-rails@0.9.0`][#477]

[#477]: https://github.com/thoughtbot/ember-cli-rails/issues/477

0.8.7
-----

* Bump version for the release of [`ember-cli-rails@0.8.7`][#477]

[#477]: https://github.com/thoughtbot/ember-cli-rails/issues/477

0.8.6
-----

* Bump version for the release of [`ember-cli-rails@0.8.6`][#477]

[#477]: https://github.com/thoughtbot/ember-cli-rails/issues/477

0.8.5
-----

* Bump version for the release of [`ember-cli-rails@0.8.5`][#477]

[#477]: https://github.com/thoughtbot/ember-cli-rails/issues/477

0.8.4
-----

* Bump version for the release of [`ember-cli-rails@0.8.4`][#477]

[#477]: https://github.com/thoughtbot/ember-cli-rails/issues/477

0.8.3
-----

* Bump version for the release of [`ember-cli-rails@0.8.3`][#477]

[#477]: https://github.com/thoughtbot/ember-cli-rails/issues/477

0.8.2
-----

* Bump version for the release of [`ember-cli-rails@0.8.2`][#477]

[#477]: https://github.com/thoughtbot/ember-cli-rails/issues/477

0.8.1
-----

* Bump version for the release of [`ember-cli-rails@0.8.1`][#477]

[#477]: https://github.com/thoughtbot/ember-cli-rails/issues/477

0.8.0
-----

* Bump version for the release of [`ember-cli-rails@0.8.0`][#477]

[#477]: https://github.com/thoughtbot/ember-cli-rails/issues/477

0.8.0
-----

* Bump version for the release of [`ember-cli-rails@0.8.0`][#477]

[#477]: https://github.com/thoughtbot/ember-cli-rails/issues/477

0.7.1
-----

* Fix `this._super.init` deprecation warning. [#32]

[#32]: https://github.com/rondale-sc/ember-cli-rails-addon/pull/32

0.7.0
-----

* No longer warn if `ember-cli-dependency-checker` is missing. [#29]

[#29]: https://github.com/rondale-sc/ember-cli-rails-addon/pull/29

0.6.0
-----

* Wait until [outputReady] hook to remove lockfile.
* Remove dependency on `url-join` and `fs-extra` packages.
* Simplify inclusion logic thanks to removal of sprockets. [#25]

[#25]: https://github.com/rondale-sc/ember-cli-rails-addon/pull/25

0.5.2
-----

* Generate a Rails-compatible asset manifest file. [#23]
* Introduce `prefix` configuration which corresponds to Rails'
  [`config.assets.prefix`][prefix]. To match Rails, it defaults to `assets`.
  [#22]

[#23]: https://github.com/rondale-sc/ember-cli-rails-addon/pull/23
[#22]: https://github.com/rondale-sc/ember-cli-rails-addon/pull/22
[prefix]: http://guides.rubyonrails.org/asset_pipeline.html#precompiling-assets

0.5.1
-----

* No longer infer `fingerprint.prepend` domain from environment variables.
  Instead, expose `app.options['ember-cli-rails'].prepend` configuration
  value.

0.5.0
-----

* Don't fingerprint assets when running `ember test` from Rails.
* Introduce file in `app/initializers` to setup Rails CSRF integration [#19]
* Prepend Sprockets path to EmberCLI assets.
  Default fingerprinting to no generate `MD5` hash when building in
  `development`.  [#17].

[#19]: https://github.com/rondale-sc/ember-cli-rails-addon/pull/19
[#17]: https://github.com/rondale-sc/ember-cli-rails-addon/pull/17

0.0.13
------

* Disables [Subresource Integrity][SRI], since the asset pipeline URLs no longer
  match the URLs the SRI hashes were generated against.
* Copies `dist/index.html` to `dist/assets/index.html` after a build

[SRI]: https://github.com/jonathanKingston/ember-cli-sri#what-is-it
