(function() {
    'use strict';
    require('../index.scss');
    require('./templates.module.js');
    angular
        .module('universalEditor.TinyMCE',
        [
            'universalEditor.TinyMCE.templates',
            'ui.tinymce'
        ]).config(function() {
            tinyMCE.baseURL = '/mce-files';
        });
    var context = require.context('./components', true, /\.js$/);
    context.keys().forEach(context);
})();