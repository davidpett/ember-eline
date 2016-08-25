/* jshint node: true */
'use strict';

// var path = require('path');
// var MergeTrees = require('broccoli-merge-trees');
// var Funnel = require('broccoli-funnel');
// var resolve = require('resolve');

module.exports = {
  name: 'ember-eline'
  //
  // treeForVendor: function(tree) {
  //   var understylePath = path.dirname(resolve.sync('understyle'));
  //
  //   var understyleTree = new Funnel(understylePath, {
  //     files: ['understyle.js'],
  //     destDir: '/understyle',
  //   });
  //
  //   return new MergeTrees([tree, understyleTree]);
  // },
  //
  // included: function included(app, parentAddon) {
  //   var target = (parentAddon || app);
  //   this._super.included.call(this, target);
  //
  //   this.options = target.options || {};
  //
  //   app.import('vendor/understyle/understyle.js');
  // },
};
