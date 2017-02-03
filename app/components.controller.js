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
                                    "required": true,
                                    "expandable": true,
                                    "readonly": true,
                                    "list": true,
                                    "multiname": "new_value",
                                    "tinymce-init": {
                                        "menubar": false,
                                        "skin": "lightgray",
                                        "theme": "modern",
                                        "readonly": false,
                                        "plugins": [
                                            "advlist autolink lists link image charmap print hr anchor pagebreak",
                                            "searchreplace wordcount visualblocks visualchars code",
                                            "insertdatetime nonbreaking save table contextmenu textcolor"
                                        ],
                                        "toolbar1": "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent",
                                        "toolbar2": "forecolor backcolor emoticons | link image",
                                        "language": "ru"
                                    }


                                }
                            }
                        }
                    ]
                }
            }
        };
    }
})();