;(function (window, undefined) {
    'use strict';

    hiocsApp.directive('leftSidebar', ['$location','$window','$http','$q', function($location,$window, $http,$q) {
	    return {
		    templateUrl:'js/directive/left-sidebar/tpl.html',
		    restrict: 'AE',
		    scope: {
                loginUser: '='
		    },
		    link: function(scope) {
                var isShowSetting = true;
                $http({
                    method: 'GET',
                    url: 'data/menu/'+$location.search().moduleId+'.json',
                    async:false,
                }).then(function successCallback(response) {
                    scope.sidebarMenu = response.data;
                    scope.$stateUrl = '';
                    scope.collapseVar = 0;
                    scope.currentUrl = $location.url().toLowerCase();
                    if(scope.currentUrl.indexOf("project")!==-1) {
                        scope.collapseVar = 1;
                        scope.$stateUrl = 'project';
                    } else if (scope.currentUrl.indexOf("image") !== -1) {
                        scope.collapseVar = 1;
                        scope.$stateUrl = 'image';
                    }else if(scope.currentUrl.indexOf("deploy")!==-1) {
                        scope.collapseVar = 2;
                        scope.$stateUrl = 'deploy';
                    }else if(scope.currentUrl.indexOf("cluster")!==-1 && scope.currentUrl.indexOf("setting") === -1) {
                        scope.collapseVar = 2;
                        scope.$stateUrl = 'cluster';
                    }else if(scope.currentUrl.indexOf("host")!==-1) {
                        scope.collapseVar = 2;
                        scope.$stateUrl = 'cluster';
                    }else if(scope.currentUrl.indexOf("appStore")!==-1) {
                        scope.collapseVar = 2;
                        scope.$stateUrl = 'appStore';
                    }else if(scope.currentUrl.indexOf("monitor")!==-1 && scope.currentUrl.indexOf("setting") === -1) {
                        scope.collapseVar = 3;
                        scope.$stateUrl = 'monitor';
                    }else if(scope.currentUrl.indexOf("alarm")!==-1) {
                        scope.collapseVar = 3;
                        scope.$stateUrl = 'alarm';
                    }else if(scope.currentUrl.indexOf("globalsetting")!==-1) {
                        scope.collapseVar = 4;
                        scope.$stateUrl = 'globalsetting';
                    }else{
                        scope.collapseVar = 0;
                        scope.$stateUrl = 'notinlist';
                    }
                }, function errorCallback(response) {
                    throw new Error(response);
                });
                scope.check = function(x) {
                    if(x==scope.collapseVar)
                        scope.collapseVar = 0;
                    else
                        scope.collapseVar = x;
		        };
                scope.selectedChildMenu = function (target) {
                    scope.$stateUrl = target;
                };
		    }
	    };
	}]);

})(window);