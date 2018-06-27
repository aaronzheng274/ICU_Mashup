define('qlikService', function () {
    function qlikService() {

        var service = this;
        let app;
        let qlik;
        let config;
        service.setQlik = setQlik
        service.getApp = getApp
        service.openApp = openApp;

        function openApp(qlik, appId, config) {
            this.app = qlik.openApp(appId, config)
            this.config = config;
            this.qlik = qlik;
        }

        function setQlik(qlikJS) {
            this.qlik = qlikJS;
        }

        function getApp() {
            return this.app;
        }
    }
    return qlikService;
})