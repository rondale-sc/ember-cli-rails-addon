module.exports = {
  name: 'ember-cli-rails-addon',
  included: function(app) {
    app.options.storeConfigInMeta = false
  }
};
