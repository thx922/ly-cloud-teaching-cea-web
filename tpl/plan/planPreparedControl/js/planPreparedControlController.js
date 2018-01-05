;(function (window, undefined) {
	'use strict';

	window.plan_planPreparedControlController = function ($scope, $uibModal, $rootScope, $window, plan_planPreparedControlService, alertService, app) {
		// 表格的高度
		var win_height = $window.innerHeight;
		var table_height = win_height - 100;
		$rootScope.$log.debug("win_height: " + win_height);
		$rootScope.$log.debug("table_height: " + table_height);
		$scope.planPreparedControlTable = {
			url: 'data_test/tableview_planPreparedControl.json',
			//url: app.api.address + '/pyfa/pyfabzkz',
			method: 'get',
			cache: false,
			height: table_height,
			toolbar: '#toolbar', //工具按钮用哪个容器
			sidePagination: "server", //分页方式：client客户端分页，server服务端分页（*）
			striped: true,
			pagination: true,
			pageSize: 10,
			pageNumber:1,
			pageList: [5, 10, 20, 50],
			search: false,
			showColumns: true,
			showRefresh: true,
			columns: [
				{checkbox: true, width: "5%"},
				{field:"bzkzbh", title:"编制控制编号", visible:false},
				{field:"",title:"序号",align:"center",valign:"middle", width: "5%", formatter: function (value, row, index) {
					return index+1;
				}},
				{field:"xslb",title:"学生类别",align:"center",valign:"middle"},
				{field:"nj",title:"年级",align:"center",valign:"middle"},
				{field:"ksrq",title:"开始日期",align:"center",valign:"middle"},
				{field:"jsrq",title:"结束日期",align:"center",valign:"middle"},
				{field:"czr",title:"操作人",align:"center",valign:"middle"},
				{field:"czsj",title:"操作时间",align:"center",valign:"middle"},
			]
		};
		// 打开新增面板
		$scope.openAdd = function(){
			$uibModal.open({
				animation: true,
				templateUrl: 'tpl/plan/planPreparedControl/add.html',
				size: '',
				controller: openAddController
			});
		};
		// 打开修改面板
		$scope.openModify = function(){
			var rows = $('#planPreparedControlTable').bootstrapTable('getSelections');
			if(rows.length == 0){
				alertService('请先选择一项');
				return;
			}
			if(rows.length != 1){
				alertService('只能选择一项');
				return;
			}
			$uibModal.open({
				animation: true,
				templateUrl: 'tpl/plan/planPreparedControl/modify.html',
				size: '',
				resolve: {
					item: function () {
						return rows[0];
					}
				},
				controller: openModifyController
			});
		};
		// 打开删除面板
		$scope.openDelete = function(){
			var rows = $('#planPreparedControlTable').bootstrapTable('getSelections');
			if(rows.length == 0){
				alertService('请先选择要删除的项');
				return;
			}
			$uibModal.open({
				animation: true,
				templateUrl: 'tpl/plan/planPreparedControl/delete.html',
				size: '',
				resolve: {
					items: function () {
						return rows;
					},
				},
				controller: openDeleteController
			});
		};
	};
	plan_planPreparedControlController.$inject = ['$scope', '$uibModal', '$rootScope', '$window', 'plan_planPreparedControlService', 'alertService', 'app'];

	// 添加控制器
	var openAddController = function ($scope, $uibModalInstance, plan_planPreparedControlService, alertService) {
		// 数据初始化
		$scope.pyfabzkz = {
			xslb: "", // 学生类别
			nj: "", // 年级
			ksrq: "", // 开始日期
			jsrq: "" // 结束日期
		};
		// 开始日期参数配置
		$scope.ksrqOptions = {
			opened: false,
			open: function() {
				$scope.ksrqOptions.opened = true;
			}
		};
		// 结束日期参数配置
		$scope.jsrqOptions = {
			opened: false,
			open: function() {
				$scope.jsrqOptions.opened = true;
			}
		};
		// 结束日期小于开始日期时的提示
		$scope.jsrqTooltipEnableAndOpen = false;
		$scope.$watch('pyfabzkz.jsrq', function (newValue) {
			if ($scope.pyfabzkz.ksrq && newValue && (newValue < $scope.pyfabzkz.ksrq)) {
				$scope.jsrqTooltipEnableAndOpen = true;
				return;
			}
			$scope.jsrqTooltipEnableAndOpen = false;
		});
		$scope.ok = function () {
			plan_planPreparedControlService.update($scope.pyfabzkz);
			$uibModalInstance.close();
		};
		$scope.close = function () {
			$uibModalInstance.close();
		};
	};
	openAddController.$inject = ['$scope', '$uibModalInstance', 'plan_planPreparedControlService', 'alertService'];

	// 修改控制器
	var openModifyController = function ($scope, $uibModalInstance, item, plan_planPreparedControlService) {
		// 数据初始化
		$scope.pyfabzkz = {
			bzkzbh: item.bzkzbh, // 编制控制编号
			xslb: item.xslb, // 学生类别
			nj: item.nj, // 年级
			ksrq: new Date(item.ksrq), // 开始日期
			jsrq: new Date(item.jsrq) // 结束日期
		};
		// 开始日期参数配置
		$scope.ksrqOptions = {
			opened: false,
			open: function() {
				$scope.ksrqOptions.opened = true;
			}
		};
		// 结束日期参数配置
		$scope.jsrqOptions = {
			opened: false,
			open: function() {
				$scope.jsrqOptions.opened = true;
			}
		};
		// 结束日期小于开始日期时的提示
		$scope.jsrqTooltipEnableAndOpen = false;
		$scope.$watch('pyfabzkz.jsrq', function (newValue) {
			if ($scope.pyfabzkz.ksrq && newValue && (newValue < $scope.pyfabzkz.ksrq)) {
				$scope.jsrqTooltipEnableAndOpen = true;
				return;
			}
			$scope.jsrqTooltipEnableAndOpen = false;
		});
		$scope.ok = function () {
			plan_planPreparedControlService.update($scope.pyfabzkz);
			$uibModalInstance.close();
		};
		$scope.close = function () {
			$uibModalInstance.close();
		};
	};
	openModifyController.$inject = ['$scope', '$uibModalInstance', 'item', 'plan_planPreparedControlService'];

	// 删除控制器
	var openDeleteController = function ($scope, $uibModalInstance, items, plan_planPreparedControlService) {
		$scope.message = "确定要删除吗？";
		$scope.ok = function () {
			var ids = []; // 培养方案编制控制编号集合
			items.forEach (function(pyfabzkz) {
				ids.push(pyfabzkz.bzkzbh);
			});
			plan_planPreparedControlService.delete(ids);
			$uibModalInstance.close();
		};
		$scope.close = function () {
			$uibModalInstance.close();
		};
	};
	openDeleteController.$inject = ['$scope', '$uibModalInstance', 'items', 'plan_planPreparedControlService'];

})(window);
