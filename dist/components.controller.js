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
                                    label: 'ue-tinymce Одиночный режим',
                                    hint: 'Это большое и красивое текстовое поле',
                                    required: false,
                                    readonly: false,
                                    multiname: 'new_value',
                                    multiple: false,
                                    width: 8,
                                    defaultValue: '<p>Текст</p>'
                                }
                            }
                        },
                        {
                            component: {
                                name: 'ue-tinymce',
                                settings: {
                                    label: 'ue-tinymce Множественный режим',
                                    hint: 'Это большое и красивое текстовое поле',
                                    required: false,
                                    readonly: false,
                                    multiname: 'new_value',
                                    multiple: true,
                                    width: 12,
                                    defaultValue: ['Текст']
                                }
                            }
                        },
                        {
                            component: {
                                name: 'ue-tinymce',
                                settings: {
                                    label: 'ue-tinymce Только для чтения',
                                    hint: 'Это большое и красивое текстовое поле',
                                    required: false,
                                    readonly: true,
                                    multiname: 'new_value',
                                    multiple: true,
                                    width: 12,
                                    defaultValue: ['<p>Текст</p>']
                                }
                            }
                        },
                        {
                            component: {
                                name: 'ue-tinymce',
                                settings: {
                                    label: 'ue-tinymce Неактивное (disabled)',
                                    hint: 'Это большое и красивое текстовое поле',
                                    required: false,
                                    readonly: true,
                                    disabled: true,
                                    multiname: 'new_value',
                                    multiple: true,
                                    width: 12,
                                    defaultValue: ['Текст 1', 'Текст 2']
                                }
                            }
                        }
                    ]
                }
            }
        };
    }
})();