define( 'dashboard',function () {
    
    function dashboard() {
        dashboardController.$inject = [];
        function dashboardController() {
            var vm = this;
            vm.changeSel = changeSel;
            vm.toggleOpen = toggleOpen;

            init();
           
            function init() {
                // objects from app1
                qlikApp.getObject('monthYear-filter', 'gjqBtfF');
                qlikApp.getObject('readmissions','FyQYt');
	            qlikApp.getObject('patient-hyp','VFrv');
	            qlikApp.getObject('icu-mortalities','XTrp');
                qlikApp.getObject('daily-admissions','jNKpm');
                
                // app 3
                qlikApp3.getObject('central-line','jzGncQ');
    
                // app2
                qlikApp2.getObject('unplanned','DwaDNk');

                // init create list
                qlikApp.createList({
                    "qDef": {"qFieldDefs": ["Department Group"]},
                        "qInitialDataFetch": [{
                            qTop : 0,
                            qLeft : 0,
                            qHeight : 100,
                            qWidth : 1
                        }]
                    },parseDepList)

                    // init create list
                    qlikApp.createList({
                        "qDef": {"qFieldDefs": ["MonthYear"]},
                            "qInitialDataFetch": [{
                                qTop : 0,
                                qLeft : 0,
                                qHeight : 100,
                                qWidth : 1
                            }]
                        },parseYearList)
                }
                function changeSel(field, val){
                    console.log(field,' ', val)
                    let sel;
                    if(field=='MonthYear'){
                        sel = val.num
                    }else{
                        sel = val.name
                    }
                    qlikApp.field(field).selectValues([sel], true, true);
                    qlikApp2.field(field).selectValues([sel], true, true);
                    qlikApp3.field(field).selectValues([sel], true, true);
                }
               
                function toggleOpen(div){
                    $('.'+div).toggle();
                }
                    
                function parseDepList(sel){
                    console.log(sel)
                    qlikApp.destroySessionObject(sel.qInfo.qId);
                    let list = sel.qListObject.qDataPages[0].qMatrix;
                    let depOptions = []
                    console.log(list)
                    list.forEach(function(opt){
                        console.log(opt)
                        depOptions.push({name:opt[0].qText})
                    })
                    vm.depOptions = depOptions
                }

                function parseYearList(sel){
                    console.log(sel)
                    qlikApp.destroySessionObject(sel.qInfo.qId);
                    let list = sel.qListObject.qDataPages[0].qMatrix;
                    let yearOptions = []
                    console.log(list)
                    list.forEach(function(opt){
                        console.log(opt)
                        yearOptions.push({name:opt[0].qText, num: opt[0].qNum})
                    })
                    vm.yearOptions = yearOptions
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