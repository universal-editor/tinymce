(function () {
    'use strict';

    angular
        .module('universalEditor.TinyMCE')
        .directive('editorFieldTinymce',editorFieldTinymce);

    editorFieldTinymce.$inject = ['$templateCache'];

    function editorFieldTinymce($templateCache){
        return {
            restrict : 'A',
            replace : true,
            scope : true,
            template : $templateCache.get('module/directives/editorFieldTinymce/editorFieldTinymce.html'),
            controller: 'EditorFieldTinymceController',
            controllerAs : 'vm',
            link : link
        };

        function link(scope, elem, attrs, ctrl){
            elem.on('$destroy', function () {
                scope.$destroy();
            });
        }
    }
})();