(function() {
    'use strict';

    angular
        .module('ue-tinymce')
        .controller('UeTinymceController', UeTinymceController);

    UeTinymceController.$inject = ['$scope', '$controller'];

    function UeTinymceController($scope, $controller) {
        /* jshint validthis: true */
        var vm = this,
            componentSettings,
            baseController;

        vm.$onInit = function() {
            vm.loadedMCE = false;
            componentSettings = vm.setting.component.settings;
            baseController = $controller('FieldsController', { $scope: $scope });
            angular.extend(vm, baseController);

            vm.wysiwygOptions = componentSettings['tinymce-init'] || {
                menubar: true,
                plugins: 'advlist autolink link lists charmap',
                skin: 'lightgray',
                theme: 'modern'
            };
            if (angular.isObject(vm.defaultValue)) {
                vm.previewValue = angular.copy(vm.defaultValue);
            } else {
                vm.previewValue = vm.defaultValue;
            }

            vm.wysiwygOptions.readonly = vm.readonly;
            vm.wysiwygOptions.setup = function(editor) {
                editor.on('init', function(e) {
                    vm.loadedMCE = true;
                });
            };
            vm.addItem = addItem;
            vm.removeItem = removeItem;
            vm.listeners.push($scope.$on('editor:entity_loaded', function(e, data) {
                $scope.onLoadDataHandler(e, data);
                if (!data.$parentComponentId || data.$parentComponentId === vm.parentComponentId && !vm.options.filter) {
                    vm.equalPreviewValue();
                }
            }));
        };
        //-- private functions
        function removeItem(index) {
            if (angular.isArray(vm.fieldValue)) {
                vm.fieldValue.forEach(function(value, key) {
                    if (key == index) {
                        vm.fieldValue.splice(index, 1);
                    }
                });
            }
        }

        function addItem() {
            vm.fieldValue.push('');
        }
    }
})();