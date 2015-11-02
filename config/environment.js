module.exports = function(_, appConfig) {
  var baseURL = '/assets/' + appConfig.modulePrefix;

  if (process.env.RAILS_ENV) {
    return {
      baseURL: baseURL,
    }
  } else {
    return {};
  }
};
