(function() {
    'use strict';
    require('../index.scss');
    if (IS_DEV) {
        require('../bootstrap_inject.scss');
    }
    require('./templates.module.js');
    angular
        .module('ue-tinymce',
        [
            'ue-tinymce.templates',
            'ui.tinymce'
        ]).config(function() {
            tinyMCE.baseURL = '/tinymce-dist'; 
            if(tinyMCE.language === 'ru') {
                require('./ru.js');
            }
        });
    var context = require.context('./components', true, /\.js$/);
    context.keys().forEach(context);
})();