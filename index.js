var fs = require('fs');
var path = require('path');

var lockfileNames = {
  pre: 'preBuild.lock',
  post: 'postBuild.lock'
};

module.exports = {
  name: 'ember-cli-rails-addon',
  included: function(app) {
    app.options.storeConfigInMeta = false;
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
