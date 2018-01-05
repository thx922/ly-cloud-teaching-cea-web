;(function (window, undefined) {
    'use strict';
    
    hiocsApp.controller('hiocsCtr', ['$rootScope', '$scope', '$q', function ($rootScope, $scope, $q) {
        $rootScope.$log.debug("app controller run ...");
        var _this = this;
        _this.getLoginUser = function () {
            var deferred = $q.defer();
            return deferred.promise;
        };
        _this.getLoginUser();

        // 左侧菜单栏收缩
        _this.thinLeftNav = Boolean(Number(localStorage.getItem('thinLeftNav')));
        _this.toggleThinLeftNav = function () {
            $rootScope.$log.debug("toggleThinLeftNav thinLeftNav: " + _this.thinLeftNav);
            _this.thinLeftNav = !_this.thinLeftNav;
            localStorage.setItem('thinLeftNav', String(Number(_this.thinLeftNav)));
        };
    }]);

})(window);
