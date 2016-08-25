/*jshint node:true*/
module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    var that = this;
    return that.addPackageToProject('understyle').then(function() {
      that.addPackageToProject('ember-browserify');
    });
  }
};
