define( 'dashboard',function () {
    
    function dashboard() {
        dashboardController.$inject = [];
        function dashboardController() {
            // binding variables to the controller
            var vm = this;
            vm.changeSel = changeSel;
            vm.toggleOpen = toggleOpen;

            init();
           
            function init() {
                // objects from app1
                qlikApp.clearAll().then(function(a){
                    qlikApp.getObject('monthYear-filter', 'gjqBtfF');
                    qlikApp.getObject('readmissions','NxkJJQk');
                    qlikApp.getObject('patient-hyp','nTwHy');
                    qlikApp.getObject('icu-mortalities','XTrp');
                    qlikApp.getObject('daily-admissions','jNKpm');
                    // current selections portion of the nav bar
                    qlikApp.getObject('CurrentSelections', 'CurrentSelections');
                })

                // app2
                qlikApp2.clearAll().then(function(a){
                    qlikApp2.getObject('unplanned','DwaDNk');
                })
 
                
                // app 3
                qlikApp3.clearAll().then(function(a){
                    qlikApp3.getObject('central-line','jzGncQ');
                })


                // init create list for Department Groups and calls parseDepList below
                qlikApp.createList({
                    "qDef": {"qFieldDefs": ["Department Group"]},
                        "qInitialDataFetch": [{
                            qTop : 0,
                            qLeft : 0,
                            qHeight : 100,
                            qWidth : 1
                        }]
                    },parseDepList)

                // init create list for MonthYears and calls parseYearList below
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
                    // Displays the returned field and value to the console for testing purposes
                    console.log(field,' ', val)
                    let sel;
                    // For MonthYear selections, Qlik will only respond to the numerical value of the date
                    // So if the field is MonthYear, use the num key of the object
                    if(field=='MonthYear'){
                        sel = val.num
                    // Otherwise use the name key of the object
                    }else{
                        sel = val.name
                    }
                    // Apply the selections across the apps with the selectValues method from the QField class of Qlik's Field API
                    qlikApp.field(field).selectValues([sel], true, true);
                    qlikApp2.field(field).selectValues([sel], true, true);
                    qlikApp3.field(field).selectValues([sel], true, true);
                }
               
                // Allows the dropdown filters and KPIs to be displayed 
                function toggleOpen(div){
                    $('.'+div).toggle();
                }
                
                // function that grabs all department group options
                function parseDepList(sel){
                    console.log(sel)
                   
                    // set list to the qMatrix in the Qlik hypercube that contains all department group options
                    let list = sel.qListObject.qDataPages[0].qMatrix;
                    // initialize an array
                    let depOptions = []
                    console.log(list)
                    // function that takes each key value and populates the depOptions array
                    list.forEach(function(opt){
                        console.log(opt)
                        depOptions.push({name:opt[0].qText, state: opt[0].qState})
                    })
                    // exports 
                    vm.depOptions = depOptions
                }
                
                // function that grabs all month year options
                function parseYearList(sel){
                    console.log(sel)
                   
                    // set list to the qMatrix in the Qlik hypercube that contains all month year options
                    let list = sel.qListObject.qDataPages[0].qMatrix;
                    // initialize an array
                    let yearOptions = []
                    console.log(list)
                    // function that takes each key value and populates the depOptions array
                    list.forEach(function(opt){
                        console.log(opt)
                        // takes in the qNum value aswell
                        yearOptions.push({name:opt[0].qText, num: opt[0].qNum, state: opt[0].qState})
                    })
                    // exports
                    vm.yearOptions = yearOptions
                }

                // clears filters from all apps once clear button is clicked
                $("#ClearAll").click(function() {

                    qlikApp.clearAll();
                    qlikApp2.clearAll();
                    qlikApp3.clearAll();
                    
                          });
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



