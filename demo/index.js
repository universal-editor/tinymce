(function () {
    'use strict';
    angular.module('demoApp', ['ui.router','universal-editor', 'ue-tinymce']);


    angular
        .module('demoApp')
        .config(routerConfig);

    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('components', {
                url: '/components',
                template: '<universal-editor ue-config="vm.ueConfig"></universal-editor>',
                controllerAs: 'vm',
                controller: 'ComponentsController'
            });
        $urlRouterProvider.otherwise('/components');
    }
})();

