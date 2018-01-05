;(function (window, undefined) {
    'use strict';

    hiocsApp.constant('app', {
        page: {
            pageNum: 1,
            pageSize: 20
        },
        api: {
            address: "http://localhost:8089"
        }
    });

    hiocsApp.config(['$logProvider', function ($logProvider) {
        $logProvider.debugEnabled(true); // 启用打印日志
    }]);

    hiocsApp.run(['$rootScope', '$log', function ($rootScope, $log) {
        $rootScope.$log = $log;
        $rootScope.$log.debug("app run ...");
    }]);

})(window);