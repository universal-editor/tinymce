(function() {
    'use strict';
    require('../index.scss');
    require('./templates.module.js');
    angular
        .module('ue-tinymce',
        [
            'ue-tinymce.templates',
            'ui.tinymce'
        ]).config(function() {
            tinyMCE.baseURL = '/mce-files';
        });
    var context = require.context('./components', true, /\.js$/);
    context.keys().forEach(context);
})();