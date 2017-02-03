(function() {
    'use strict';

    angular
        .module('demoApp')
        .controller('ComponentsController', ComponentsController);

    ComponentsController.$inject = [];

    function ComponentsController() {
        var vm = this;
        vm.ueConfig = {
            component: {
                name: 'ue-group',
                settings: {
                    label: 'Components',
                    fields: [
                        {
                            component: {
                                name: 'ue-tinymce',
                                settings: {
                                    "name": "html_text",
                                    "label": "Форматированный текст",
                                    "hint": "Это большое и красивое текстовое поле",
                                    "required": false,
                                    "expandable": true,
                                    "readonly": false,
                                    "multiname": "new_value",
                                    "multiple": true,
                                    width: 12
                                }
                            }
                        }
                    ]
                }
            }
        };
    }
})();