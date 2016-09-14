(function () {
    'use strict';
    angular
    .module('universalEditor.TinyMCE',
    [
        'universalEditor.TinyMCE.templates',
        'ui.tinymce'
    ]).config(function() {
        tinyMCE.baseURL = '/tinymce-plugin/files';
    });
})();