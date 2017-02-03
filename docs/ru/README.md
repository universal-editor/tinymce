# Tinymce

Является подобием поля Textarea, с тем отличием, что для редактирования в данном случае 
будет применен визуальный редактор MCE Editor.

```json
{
  "name": "field_name",
  "component": {
    "name": "ue-tinymce",
    "settings": {
      "label": "Компонент tinymce",
      "hint": "Это большое и красивое текстовое поле",
      "required": false,
      "readonly": false,
      "multiple": false,
      "width": 8,
      "defaultValue": "<p>Текст</p>",
      "expandable": true,
      "list": true,
      "multiname": "new_value",
      "tinymce-init": {
        "menubar": false,
        "skin": "lightgray",
        "theme": "modern",
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
```

## Корневые настройки компонента

* **name**: имя поля на бекенде.
* **component**: объект, описывающий компонент.

## Параметры раздела **settings**

* **label**: название поля (выводится в интерфейсе редактора).
* **hint**: текстовая информационная подсказка, выводимая слева от заголовка поля.
* **required**: является ли поле обязательным для заполнения.
* **defaultValue**: значение поля по-умолчанию.
* **expandable**: требуется ли дополнительно запрашивать это поле у бекенда. Если установлено, то запрос на получение 
сущности будет выполнен в формате:
```
/rest/v1/news?expand=html_text
```
* **multiple**: параметр отвечает за указание возможности поля принимать множественные значения.
* **filterable**: параметр отвечает за добавление поля в форму фильтрации. Данный параметр можно указывать только у полей 
первого уровня. Для полей вложенных в связанные сущности ( которые находятся внутри полей с типом array) фильтры не 
будут созданы. По умолчанию добавляет все поля, за исключением тех у которых данный параметр установлен в false;
* **readonly**: параметр указывает на запрет редактирования поля.
* **list**: нужно ли отображать поле в списке записей. Не действует для вложенных в массивы полей. Для того, что бы 
таблица не была пустой, требуется указать данный параметр со значением true хотя бы для одного поля.
* **multiname**: ключ, который будет использован для создания массива в запросе к бекенду в том случае, если поле 
работает в множественном режиме. Если ключ не установлен, то на бекенд отправится массив вида 
`['value1', 'value2', 'value3']`. Если ключ установлен, например: `multiname:"value"`, то на бекенд отправится 
массив вида `[["value"=>"value1"], ["value"=>"value2"], ["value"=>"value3"]`.
* **tinymce-init**: параметр-объект, который задает конфигурацию редактора 
(в программной реализации это объект который передается в функцию tinymce.init(), подробнее см. https://www.tinymce.com/docs/configure/integration-and-setup/#plugins)
В ключе  **plugins** хранится перечень плагинов для mce. Библиотеки для них хранятся в /mce-files/plugins/.

Для подключения нового плагина использовать правило:

код плагина располагается по адресу /mce-files/plugins/**plugin_name**/plugin.min.js, 
где **plugin_name** – имя плагина, которое нужно прописать в параметре **plugins** через пробел.

В **toolbarN** (где N – номер панели, если отсчитывать сверху) перечисляются конкретные компоненты плагина, 
помещаемые на панели редактора. 