(function () {
    'use strict';
    angular
    .module('tinymce.plugin',
    [
        'tinymce.plugin.templates',
        'ui.tinymce'
    ]).config(function() {
        tinyMCE.baseURL = '/tinymce-plugin/files';
    });
})();
(function () {
    'use strict';

    angular
        .module('tinymce.plugin')
        .controller('EditorFieldTinymceController',EditorFieldTinymceController);

    EditorFieldTinymceController.$inject = ['$rootScope', '$scope','EditEntityStorage','ArrayFieldStorage'];

    function EditorFieldTinymceController($rootScope, $scope,EditEntityStorage,ArrayFieldStorage){
        /* jshint validthis: true */
        var vm = this;
        var fieldErrorName;

        if($scope.parentField){
            if($scope.parentFieldIndex){
                fieldErrorName = $scope.parentField + "_" + $scope.parentFieldIndex + "_" + $scope.fieldName;
            } else {
                fieldErrorName = $scope.parentField + "_" + $scope.fieldName;
            }
        } else {
            fieldErrorName = $scope.fieldName;
        }

        vm.fieldName = $scope.field.name;
        vm.readonly = $scope.field.readonly || false;
        vm.fieldValue = "";
        if ($scope.field['tinymce-init']) {
            vm.wysiwygOptions = $scope.field['tinymce-init'];
            vm.wysiwygOptions.readonly = vm.readonly;
        } else {
            vm.wysiwygOptions = {
                menubar: $scope.field.menubar || true,
                plugins: 'advlist autolink link lists charmap',
                skin: 'lightgray',
                theme: 'modern',
                readonly: vm.readonly
            };
        }
        $scope.$on('editor:tinymce_extended', function (event, data) {
            angular.extend(vm.wysiwygOptions, data);
        });
        

        $scope.$parent.vm.error = [];
        vm.parentFieldIndex = $scope.parentFieldIndex || false;

        if ($scope.field.hasOwnProperty("multiple") && $scope.field.multiple === true){
            vm.multiple = true;
            vm.fieldValue = [];
            if ($scope.field.multiname || angular.isString($scope.field.multiname)) {
                vm.multiname = ('' + $scope.field.multiname) || "value";
            }
        } else {
            vm.multiple = false;
            vm.fieldValue = "";
        }

        if(vm.parentFieldIndex){
            if(vm.multiple){
                vm.fieldValue = [];
                angular.forEach(ArrayFieldStorage.getFieldValue($scope.parentField,$scope.parentFieldIndex,$scope.field.name), function (item) {
                    if (vm.multiname) {
                        vm.fieldValue.push(item[vm.multiname]);
                    } else {
                        vm.fieldValue.push(item);
                    }
                });
            } else {
                vm.fieldValue = ArrayFieldStorage.getFieldValue($scope.parentField,$scope.parentFieldIndex,$scope.field.name) || "";
            }
        }

        EditEntityStorage.addFieldController(this);

        this.getFieldValue = function () {

            var field = {};
            var wrappedFieldValue;

            if(vm.multiname){
                wrappedFieldValue = [];
                angular.forEach(vm.fieldValue, function (valueItem) {
                    var tempItem = {};
                    tempItem[vm.multiname] = valueItem;
                    wrappedFieldValue.push(tempItem);
                });
            } else if(vm.multiple){
              wrappedFieldValue = [];
              angular.forEach(vm.fieldValue, function (valueItem) {
                  wrappedFieldValue.push(valueItem);
              });
            } else {
                wrappedFieldValue = vm.fieldValue;
            }

            if($scope.parentField){
                if(vm.parentFieldIndex){
                    field[$scope.parentField] = [];
                    field[$scope.parentField][vm.parentFieldIndex] = {};
                    field[$scope.parentField][vm.parentFieldIndex][vm.fieldName] = wrappedFieldValue;
                } else {
                    field[$scope.parentField] = {};
                    field[$scope.parentField][vm.fieldName] = wrappedFieldValue;
                }

            } else {
                field[vm.fieldName] = wrappedFieldValue;
            }

            return field;
        };

        this.getInitialValue = function () {

            var field = {};

            if($scope.parentField){
                if(vm.multiple){
                    field[$scope.parentField] = {};
                    field[$scope.parentField][vm.fieldName] = [""];
                } else {
                    field[$scope.parentField] = {};
                    field[$scope.parentField][vm.fieldName] = "";
                }
            } else {
                if(vm.multiple){
                    field[vm.fieldName] = [""];
                } else {
                    field[vm.fieldName] = "";
                }
            }

            return field;
        };

        vm.addItem = function () {
            vm.fieldValue.push("");
        };

        vm.removeItem = function (index) {
            angular.forEach(vm.fieldValue, function (value,key) {
                if (key == index){
                    vm.fieldValue.splice(index,1);
                }
            });
        };

        $scope.$on('editor:entity_loaded', function (event, data) {

            if( data.editorEntityType === "new" ){
                vm.fieldValue = vm.multiple ? [""] : "";
                return;
            }

            if(!$scope.parentField){
                if(!vm.multiple){
                    vm.fieldValue = data[$scope.field.name];
                } else if (vm.multiname) {
                    vm.fieldValue = [];
                    angular.forEach(data[$scope.field.name], function (item) {
                        vm.fieldValue.push(item[vm.multiname]);
                    });
                } else {
                    vm.fieldValue = [];
                    angular.forEach(data[$scope.field.name], function (item) {
                        vm.fieldValue.push(item);
                    });
                }
            } else {
                if(!vm.multiple){
                    vm.fieldValue = data[$scope.parentField][$scope.field.name];
                } else if (vm.multiname) {
                    vm.fieldValue = [];
                    angular.forEach(data[$scope.parentField][$scope.field.name], function (item) {
                        vm.fieldValue.push(item[vm.multiname]);
                    });
                } else {
                    vm.fieldValue = [];
                    angular.forEach(data[$scope.parentField][$scope.field.name], function (item) {
                        vm.fieldValue.push(item);
                    });
                }
            }
        });

        $scope.$on("editor:api_error_field_"+ fieldErrorName, function (event,data) {
            if(angular.isArray(data)){
                angular.forEach(data, function (error) {
                    if($scope.$parent.vm.error.indexOf(error) < 0){
                        $scope.$parent.vm.error.push(error);
                    }
                });
            } else {
                if($scope.$parent.vm.error.indexOf(data) < 0){
                    $scope.$parent.vm.error.push(data);
                }
            }
        });

        $scope.$on('$destroy', function () {
            EditEntityStorage.deleteFieldController(vm);
            if(vm.parentFieldIndex){
                ArrayFieldStorage.fieldDestroy($scope.parentField,$scope.parentFieldIndex,$scope.field.name,vm.fieldValue);
            }
        });

        $scope.$watch(function () {
            return vm.fieldValue;
        }, function () {
            $scope.$parent.vm.error = [];
        },true);
    }
})();
(function () {
    'use strict';

    angular
        .module('tinymce.plugin')
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
(function(module) {
try {
  module = angular.module('tinymce.plugin.templates');
} catch (e) {
  module = angular.module('tinymce.plugin.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('module/directives/editorFieldTinymce/editorFieldTinymce.html',
    '\n' +
    '<div>\n' +
    '    <div data-ng-if="vm.multiple" class="field-textarea-wrapper col-lg-6 col-md-6 col-sm-6 col-xs-6">\n' +
    '        <div data-ng-repeat="field_item in vm.fieldValue track by $index" class="item-textarea-wrapper">\n' +
    '            <div>\n' +
    '                <textarea data-ui-tinymce="vm.wysiwygOptions" data-ng-model="vm.fieldValue[$index]"></textarea>\n' +
    '                <div data-ng-click="vm.removeItem($index)" data-ng-if="!vm.readonly" class="btn btn-default btn-sm">x</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div data-ng-click="vm.addItem()" data-ng-if="!vm.readonly" class="btn btn-primary btn-sm">{{\'BUTTON.ADD\' | translate}}</div>\n' +
    '    </div>\n' +
    '    <div data-ng-if="!vm.multiple" class="field-textarea-wrapper col-lg-6 col-md-6 col-sm-6 col-xs-6">\n' +
    '        <div>\n' +
    '            <textarea data-ui-tinymce="vm.wysiwygOptions" data-ng-model="vm.fieldValue"></textarea>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();
