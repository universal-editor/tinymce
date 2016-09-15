(function () {
    'use strict';
    angular
    .module('tinymce.plugin',
    [
        'tinymce.plugin.templates',
        'ui.tinymce'
    ]).config(function() {
        tinyMCE.baseURL = '/assets/universal-editor/tinymce';
    });
})();