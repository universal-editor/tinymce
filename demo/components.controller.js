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
                                    defaultValue: '<p>Текст</p>',
                                    'tinymce-init': {
                                        height: '300',
                                        menubar: false,
                                        skin: 'lightgray',
                                        theme: 'modern',
                                        language: 'ru',
                                        plugins: [
                                          'advlist autolink lists link image charmap print hr anchor pagebreak',
                                          'searchreplace wordcount visualblocks visualchars code',
                                          'insertdatetime nonbreaking save table contextmenu textcolor image link media'
                                        ],
                                        toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
                                        toolbar2: 'forecolor backcolor emoticons | link '
                                    }
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