define( 'dashboard',function () {
    
    function dashboard() {
        dashboardController.$inject = [];
        function dashboardController() {
            var vm = this;
       
            init();
           
            function init() {
                // objects from app1
                qlikApp.getObject('monthYear-filter', 'gjqBtfF');
                qlikApp.getObject('department-filter', 'jbQQSg');
                qlikApp.getObject('readmissions','FyQYt');
	            qlikApp.getObject('patient-hyp','VFrv');
	            qlikApp.getObject('icu-mortalities','XTrp');
                qlikApp.getObject('daliy-admissions','jNKpm');
                
                // app 3
                qlikApp3.getObject('central-line','jzGncQ');
    
                // app2
                qlikApp2.getObject('unplanned','DwaDNk');
            }
        }
        return {
            bindings: {},
            controller: dashboardController,
            controllerAs: 'cf',
            templateUrl: 'app/components/dashboard/dashboard.component.html'
        }
    }

    return dashboard();
});