var fs = require('fs');
var path = require('path');

module.exports = {
  name: 'ember-cli-rails-addon',
  included: function(app) {
    app.options.storeConfigInMeta = false;
    if (process.env.SUPPRESS_JQUERY === 'true') {
      var index = app.legacyFilesToAppend.indexOf(app.bowerDirectory + '/jquery/dist/jquery.js');

      app.legacyFilesToAppend.splice(index, 1);
    }
  },
  preBuild: function(result) {
    if(!fs.existsSync(lockfile = this.lockfilePath())) {
      fs.openSync(lockfile, 'w');
    }
  },
  postBuild: function(result){
    if(fs.existsSync(lockfile = this.lockfilePath())) {
      fs.unlinkSync(lockfile);
    }
  },
  lockfilePath: function() {
    return path.join(process.cwd(), 'tmp', 'build.lock');
  }
};
