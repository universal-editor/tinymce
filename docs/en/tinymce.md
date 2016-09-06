# Tinymce

Is like the field [Textarea] (textarea.md), but for the editing is used
MCE Editor WYSIWYG.

`` `Json
{
    "Name": "html_text",
    "Label": "Rich Text"
    "Type": "tinymce",
    "Hint": "This is a great and beautiful text field"
    "Required": true,
    "Expandable": true,
    "Multiple": true,
    "Readonly": true,
    "List": true,
    "Multiname": "new_value",
    "Tinymce-init": {
        "Menubar": false,
        "Skin": "lightgray",
        "Theme": "modern",
        "Readonly": false,
        "Plugins": [
            "advlist autolink lists link image charmap print hr anchor pagebreak",
            "searchreplace wordcount visualblocks visualchars code",
            "insertdatetime nonbreaking save table contextmenu textcolor"
        ]
        "Toolbar1": "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent",
        "Toolbar2": "forecolor backcolor emoticons | link image"
     }
}
`` `

## Options

* **Name**: name of the field in the backend.
* **Label**: field name (displayed in the editor interface).
* **Type**: field type.
* **Hint**: information tooltip text that is displayed to the left of the header fields.
* **Required**: whether the field is required.
* **Expandable**: if you want to ask for the additional field at the backend. If it is determined that a request for entity will be made in the format:

```
/rest/v1/news?Expand = html_text
```

* **Multiple**: setting is responsible for the designation of the field to take the possibility of multiple values.
* **Filterable**: setting is responsible for adding fields in the filter shape. This option can only be specified in the fields
the first level. For fields invested in related entities (which are within the fields of type array) filters are not.
They will be created. The default adds all fields except those in which the value is set to false.
* **Readonly**: specifies the ban on editing field.
* **List**: whether you want to display the field in the record list. Not valid for nested arrays in fields. In order to
the table was not empty, you must specify this option to true for at least one field.
* **Multiname**: a key that will be used to create an array in the request to the backend in the event that the field
plural works in mode. If the key is not installed, go to the backend of the form array
`[ 'Value1', 'value2', 'value3']`. If a key is installed, for example: `multiname:" value "`, then go to the backend
An array of the `[[" value "=>" value1 "], [" value "=>" value2 "], [" value "=>" value3 "]`.
* **RequiredField**: option makes the field empty inactive when the values ​​of other fields specified in this parameter.
* **Tinymce-init**: setting object that specifies the configuration editor.
(In software implementation is an object that is passed to tinymce.init() function, see details https://www.tinymce.com/docs/configure/integration-and-setup/#plugins)
In the key **plugins** stored list of plugins for mce. They are stored in the directory /mce-files/plugins/.

To install a new plug-in to use the rule:

code of the plugin is located at /mce-files/plugins/**plagin_name**/plugin.min.js,
where **plagin_name** - name of the plugin that you want to register in **plugins** parameter, separated by a space.

In **toolbarN** (where N - number of panels, if you count from the top) lists the specific components of a plug,
placed on the editor panel.