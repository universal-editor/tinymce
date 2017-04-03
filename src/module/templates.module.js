(function(module) {
    try {
        module = angular.module('ue-tinymce.templates');
    } catch (e) {
        module = angular.module('ue-tinymce.templates', []);
    }
    module.run(function($templateCache) {
        'ngInject';
        require.context('../module', true, /\.jade$/).keys().forEach(function(req) {
            var path = req.substr(2, req.length - 7);
            $templateCache.put('module/' + path + '.html', require('./' + path + '.jade')());
        });
    });
})();
