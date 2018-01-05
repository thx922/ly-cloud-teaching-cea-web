;(function (window, undefined) {
    'use strict';

    hiocsApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/app');
        $stateProvider.state('app', {
            url: '/app',
            templateUrl: 'tpl/app.html',
            controller: function(){
                
            }
        }).state('common', {
            url: '/common?moduleId&ncyBreadcrumbLabel',
            templateUrl: 'tpl/common.html',
            controller: function($scope, $stateParams){
                $scope.ncyBreadcrumbLabel = $stateParams.ncyBreadcrumbLabel; // 动态改变面包屑
            },
            ncyBreadcrumb: {
                label: '{{ncyBreadcrumbLabel}}',
            }
        });
    }]);
})(window);


