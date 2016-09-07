# Tinymce

Is like the field textarea, but for the editing is used MCE Editor WYSIWYG.

```json
{
    "name": "html_text",
    "label": "Rich Text",
    "type": "tinymce",
    "hint": "This is a great and beautiful text field",
    "required": true,
    "expandable": true,
    "multiple": true,
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
```

## Options

* **name**: name of the field in the backend.
* **label**: field name (displayed in the editor interface).
* **type**: field type.
* **hint**: information tooltip text that is displayed to the left of the header fields.
* **required**: whether the field is required.
* **expandable**: if you want to ask for the additional field at the backend. If it is determined that a request for entity will be made in the format:

```
/rest/v1/news?expand=html_text
```

* **multiple**: setting is responsible for the designation of the field to take the possibility of multiple values.
* **filterable**: setting is responsible for adding fields in the filter shape. This option can only be specified in the fields
the first level. For fields invested in related entities (which are within the fields of type array) filters are not.
They will be created. The default adds all fields except those in which the value is set to false.
* **readonly**: specifies the ban on editing field.
* **list**: whether you want to display the field in the record list. Not valid for nested arrays in fields. In order to
the table was not empty, you must specify this option to true for at least one field.
* **multiname**: a key that will be used to create an array in the request to the backend in the event that the field
plural works in mode. If the key is not installed, go to the backend of the form array
`[ 'value1', 'value2', 'value3']`. If a key is installed, for example: `multiname:" value "`, then go to the backend
An array of the `[[" value "=>" value1 "], [" value "=>" value2 "], [" value "=>" value3 "]`.
* **requiredField**: option makes the field empty inactive when the values ​​of other fields specified in this parameter.
* **tinymce-init**: setting object that specifies the configuration editor.
(In software implementation is an object that is passed to tinymce.init() function, see details https://www.tinymce.com/docs/configure/integration-and-setup/#plugins)
In the key **plugins** stored list of plugins for mce. They are stored in the directory /mce-files/plugins/.

To install a new plug-in to use the rule:

code of the plugin is located at /mce-files/plugins/**plugin_name**/plugin.min.js,
where **plugin_name** - name of the plugin that you want to register in **plugins** parameter, separated by a space.

In **toolbarN** (where N - number of panels, if you count from the top) lists the specific components of a plugin,
placed on the editor panel.
