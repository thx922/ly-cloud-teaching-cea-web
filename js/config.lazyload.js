;(function (window, undefined) {
    'use strict';
    /**
     * jQuery plugin config use ui-jq directive , config the js and css files that required
     * key: function name of the jQuery plugin
     * value: array of the css js file located
     */
    hiocsApp.constant('JQ_CONFIG', {
            chosen:         [
                'vendor/jquery/chosen/chosen.jquery.min.js',
                'vendor/jquery/chosen/chosen.css'
            ],
        }
    ).config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
        // We configure ocLazyLoad to use the lib script.js as the async loader
        $ocLazyLoadProvider.config({
            debug:  false,
            events: true,
            modules: [
                {
                    name: 'ui.select',
                    files: [
                        //'vendor/angular/angular-ui-select/select.min.js',
                        //'vendor/angular/angular-ui-select/select.min.css'
                    ]
                }
            ]
        });
    }]);

})(window);