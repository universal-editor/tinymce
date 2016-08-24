(function () {
    'use strict';
    angular
        .module('tinymce.plugin',
        [
            'tinymce.plugin.templates',
            'ui.tinymce'
        ]);

    angular
        .module('tinymce.plugin')
        .config(function() {
            tinyMCE.baseURL = '../tinymce-plugin/mce-files';
        });
})();