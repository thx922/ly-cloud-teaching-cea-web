;(function (window, undefined) {
    'use strict';

    // 培养方案模块
    hiocsApp.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('common.planPreparedControl', { // 培养方案编制控制
            url: '/planPreparedControl',
            templateUrl: 'tpl/plan/planPreparedControl/index.html',
            controller: plan_planPreparedControlController,
            ncyBreadcrumb: {
                label: '培养方案编制控制',
            }
        });
    }]);
    
})(window);


