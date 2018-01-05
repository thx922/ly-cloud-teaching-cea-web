;(function (window, undefined) {
    'use strict';

    hiocsApp.service("plan_planPreparedControlService", ['$http', '$log', 'app', function($http, $log, app) {
        // 添加培养方案编制控制
        this.add = function(pyfabzkz) {
            $log.debug("plan_planPreparedControlService add run ...");
            $log.debug(pyfabzkz);
            /*$http.post(app.api.address + '/pyfa/pyfabzkz', pyfabzkz)
                .then(function successCallback(response) {
                    $log.debug(response);
                }, function errorCallback(response) {
                    $log.debug(response);
                });*/
        };
        // 修改培养方案编制控制
        this.update = function(pyfabzkz) {
            $log.debug("plan_planPreparedControlService update run ...");
            $log.debug(pyfabzkz);
            /*$http.put(app.api.address + '/pyfa/pyfabzkz', pyfabzkz)
                .then(function successCallback(response) {
                    $log.debug(response);
                }, function errorCallback(response) {
                    $log.debug(response);
                });*/
        };
        // 删除培养方案编制控制
        this.delete = function(ids) {
            $log.debug("plan_planPreparedControlService delete run ...");
            $log.debug(ids);
            /*$http.delete(app.api.address + '/pyfa/pyfabzkz/'+ids)
                .then(function successCallback(response) {
                    $log.debug(response);
                }, function errorCallback(response) {
                    $log.debug(response);
                });*/
        }
    }]);

})(window);