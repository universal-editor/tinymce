# Extension for "Universal Editor"

Directive to "Universal Editor" editor which extends the possibility of adding a field **tinymce**.

## Installing extensions

This extension is pulled like a bower dependence. For connecting the extension required to execute
the following commands when you located in the root directory of the project:


* Bower install https://github.com/universal-editor/tinymce --save -F
* Required to make connecting javascript-file, css-file:
  * universal-editor.TinyMCE.min.js – the main extension file in editor.
  * universal-editor.TinyMCE.min.css – file extension styles in editor.
* Extension uses tinymce-dist library that requires files are in mce-files directory

Firstly static resources of dist/mce-files directory files needed to move to a working directory and specify the path for MCE:

```javascript
   tinyMCE.baseURL = '/tinymce-plugin/files';
```

Connection module:

```javascript
    angular.module('myApp', ['universalEditor.TinyMCE']);
```

For correct operation of the extensions editor requires a set of additional libraries that extend the functionality of AngularJS.
A current list of libraries and their version is available in bower.json of the file repository ("section" dependencies). If
extension connected via bower, then he will download the necessary libraries.

Notes:

For building the project, which connects the extension, should use a gulp plugins:
* Main-bower-files – gathers all the paths to the libraries referred to in bower.json;
* Gulp-inject – can connect js and css in the project in the specified location.

## Documentation

Types of field

* [tinymce](docs/en/README.md)
