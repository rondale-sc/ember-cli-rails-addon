var fs = require('fs');
var path = require('path');

module.exports = {
  name: 'ember-cli-rails-addon',

  /*
     This fixes an issue with the ember-cli Builder.prototype.build
     implementation for 0.1.3 and 0.1.4. The bug was fixed in
     https://github.com/stefanpenner/ember-cli/pull/2792 and will be
     availabe in 0.1.5.  Once that version is published and in normal
     usage this monkey patch can be removed.
   */
  monkeyPatchBuilderBuild: function() {
    var emberCLIVersion = this.project.emberCLIVersion();

    var portions = emberCLIVersion.split('.').map(function(input) {
      return parseInt(input, 10);
    });

    if (portions[1] === 1 && portions[2] > 2 && portions[2] < 5) {
      var Builder = this.project.require('ember-cli/lib/models/builder');

      // this is the ember-cli implementation as of:
      // https://github.com/stefanpenner/ember-cli/pull/2792.
      Builder.prototype.build = function() {
        var self = this;
        var args = [];
        for (var i = 0, l = arguments.length; i < l; i++) {
          args.push(arguments[i]);
        }

        return this.processAddonBuildSteps('preBuild')
           .then(function() {
             return self.builder.build.apply(self.builder, args);
           })
          .then(this.processBuildResult.bind(this))
          .then(this.processAddonBuildSteps.bind(this, 'postBuild'));

      };
    }
  },

  warnMissingDependencyChecker: function() {
    var dependencies = this.project.dependencies();

    if (!dependencies['ember-cli-dependency-checker']) {
      console.warn('Usage of "ember-cli-dependency-checker" is strongly advised to ensure your project cache is in sync with the project\'s requirements.');
    }
  },

  init: function() {
    this.monkeyPatchBuilderBuild();
    this.warnMissingDependencyChecker();
  },

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
