(function (module) {
    try {
        module = angular.module('universalEditor.TinyMCE.templates');
    } catch (e) {
        module = angular.module('universalEditor.TinyMCE.templates', []);
    }
    module.run(['$templateCache', function ($templateCache) {
        require.context('../module', true, /\.jade$/).keys().forEach(function (req) {
            var path = req.substr(2, req.length - 7);
            $templateCache.put('module/' + path + '.html', require('./' + path + '.jade')());
        });
    }]);
})();