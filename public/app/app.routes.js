// determines the flow the the site, not much here since it's a single page application
define('routes',function(){
    
    function routeConfig($locationProvider, $stateProvider, $urlRouterProvider){
       
        $stateProvider
        .state('dashboard', {
          url: '/dashboard',
          template: '<dashboard-comp></dashboard-comp>',
        })
        // .state('page2', {
        //     url: '/page2',
        //     template: '<page-two qlik-id = "xePs"></page-two>',
        //   })
        $urlRouterProvider.otherwise('/dashboard');
    }
    routeConfig.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
    return routeConfig;

})