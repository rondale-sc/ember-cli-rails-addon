var fs = require('fs');
var path = require('path');

var lockfileNames = {
  pre: 'preBuild.lock',
  post: 'postBuild.unlock'
}

module.exports = {
  name: 'ember-cli-rails-addon',
  included: function(app) {
    app.options.storeConfigInMeta = false
  },
  preBuild: function(result) {
    this.clearExistingLockfile(lockfileNames.post, result)
    this.createLockfile(lockfileNames.pre, result)
  },
  postBuild: function(result){
    this.clearExistingLockfile(lockfileNames.pre, result)
    this.createLockfile(lockfileNames.post, result)
  },
  createLockfile: function(name, result) {
    this.clearExistingLockfile(name, result)
    fs.openSync(lockfile, 'w')
  },
  clearExistingLockfile: function(name, result){
    if(fs.existsSync(lockfile = path.join(result.directory, name))) {
      fs.unlinkSync(lockfile)
    }
  }
};
