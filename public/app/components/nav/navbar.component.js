// no additional functionality of the navbar beside the html component currently
define( 'navBar',function () {
    
        function navBar() {
            navBarController.$inject = [];
            function navBarController() {
                var vm = this;
           
                init();
               
                function init() {
                }
            }
            return {
                bindings: {},
                controller: navBarController,
                controllerAs: 'cf',
                templateUrl: 'app/components/nav/navbar.component.html'
            }
        }
    
        return navBar();
    });