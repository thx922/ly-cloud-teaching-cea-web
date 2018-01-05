;(function (window, undefined) {
    'use strict';

    hiocsApp.directive("initTable", ['$compile', function($compile) {
        return {
            restrict: 'A',
            link: function(scope, element, attributes) {
                var opts = scope.$eval(attributes.initTable);
                opts.onLoadSuccess = function() {
                    $compile(element.contents())(scope);
                };
                element.bootstrapTable(opts);
            }
        };
    }]);

})(window);