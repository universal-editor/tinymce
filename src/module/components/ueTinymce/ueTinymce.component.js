(function () {
    'use strict';

    var ueTinymce = {
        bindings : {
            setting: '<',
            options: '='
        },
        template : ['$templateCache', function ($templateCache) {
            return $templateCache.get('module/components/ueTinymce/ueTinymce.html');
        }],
        controller: 'UeTinymceController',
        controllerAs : 'vm'
    };
    angular
        .module('ue-tinymce')
        .component('ueTinymce', ueTinymce);
})();