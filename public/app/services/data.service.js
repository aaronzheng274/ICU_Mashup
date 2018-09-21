// captures the data from the service and assigns it to val
define( 'dataService',function () {
     
    
        dataRetrieval.$inject = ['$http'];
        function dataRetrieval($http) {
            var service = this;
            let data = 'test' 
            service.getListData = getListData;
           service.setData = setData
            $http.post('http://localhost:3002/test')
            function getListData() {
                return data       
            }
            function setData(val){
                data = val
            }
           
        }

        return dataRetrieval;
})
 