(function () {
    'use strict';

    var ueTinymce = {
        bindings : {
            setting: '<',
            options: '='
        },
        template : function ($templateCache) {
            'ngInject';
            return $templateCache.get('module/components/ueTinymce/ueTinymce.html');
        },
        controller: 'UeTinymceController',
        controllerAs : 'vm'
    };
    angular
        .module('ue-tinymce')
        .component('ueTinymce', ueTinymce);
})();