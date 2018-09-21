// footer section not utilized, feel free to be creative 
define( 'footer',function () {
    
        function footerComponent() {
            footerComponentController.$inject = [];
            function footerComponentController() {
                var vm = this;
           
                init();
               
                function init() {
                }
            }
            return {
                bindings: {},
                controller: footerComponentController,
                controllerAs: 'cf',
                templateUrl: 'app/components/footer/footer.component.html'
            }
        }
    
        return footerComponent();
    });