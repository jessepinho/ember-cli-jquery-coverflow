/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-jquery-coverflow',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/jquery-ui/jquery-ui.js');
    app.import(app.bowerDirectory + '/coverflow/jquery.coverflow.js');
    app.import(app.bowerDirectory + '/coverflow/jquery.interpolate.js');
    app.import(app.bowerDirectory + '/coverflow/jquery.touchSwipe.min.js');
  }
};
