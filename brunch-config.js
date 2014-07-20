'use strict';

exports.config = {
  files: {
    javascripts: {
      joinTo: {
        'javascripts/vendor.js': /^bower_components/,
        'javascripts/app.js': /^app/
      }
    },
    stylesheets: {
      joinTo: {
        'stylesheets/app.css': /^(bower_components|app)/
      }
    }
  }
}
