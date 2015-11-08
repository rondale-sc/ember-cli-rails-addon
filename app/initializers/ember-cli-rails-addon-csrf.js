import Ember from 'ember';

const { $ } = Ember;

export default {
  name: 'ember-cli-rails-addon-csrf',

  initialize() {
    $.ajaxPrefilter((options, originalOptions, xhr) => {
      const token = $('meta[name="csrf-token"]').attr('content');
      xhr.setRequestHeader('X-CSRF-Token', token);
    });
  },
};
