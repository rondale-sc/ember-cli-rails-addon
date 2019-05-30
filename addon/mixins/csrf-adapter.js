import Mixin from '@ember/object/mixin';

export default Mixin.create({
  ajaxOptions() {
    let options = this._super(...arguments);
    let { beforeSend } = options;

    options.beforeSend = (xhr) => {
      const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      xhr.setRequestHeader('X-CSRF-Token', token);

      if (beforeSend) beforeSend(xhr);
    };

    return options;
  }
});
