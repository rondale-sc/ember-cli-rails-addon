import Ember from 'ember';

export default {
  name: 'ember-cli-rails-addon-csrf',

  initialize() {
    if (typeof $ == undefined) {
      const { $ } = Ember;
    }

    $.ajaxPrefilter((options, originalOptions, xhr) => {
      const token = $('meta[name="csrf-token"]').attr('content');
      xhr.setRequestHeader('X-CSRF-Token', token);
    });
  },
};
