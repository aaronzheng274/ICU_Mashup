var qlikApp;
var qlikApp2;
var qlikApp3;
var gQlik;



require.config({
    baseUrl: "https://qlikstage.jefferson.edu/adfss/resources",
    paths: {
        "angularRoute": "https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/1.0.18/angular-ui-router.min"
    }
});

// loading qlikJS
require(["js/qlik"], function (qlik) {
    // creating the angular app and bootstrapping
    require(["angular", 'angularRoute', "routes", 'dataService', 'navBar','footer','dashboard'],
        function (angular, uiRoute, routes, dataService, navBar, footer, dashboard) {
            let config = {
                host: 'qlikstage.jefferson.edu',
                prefix: '/adfss/',
                port: '443',
                isSecure: true
            };
            let app = angular.module('mashup-app', ['ui.router']);
            app.config(routes);
            app.component('navBar', navBar);
            app.component('dashboardComp', dashboard);
            app.component('footerComponent', footer);
            app.service('dataService', dataService);
            angular.bootstrap(document, ["qlik-angular", "mashup-app"]);
            gQlik = qlik;
            qlikApp = qlik.openApp('b7fbad3d-b38d-4deb-8cb0-18c844930f45', config)
            qlikApp2 = qlik.openApp('0a530993-b2c0-4a29-bd47-6eb6c30cc995', config)
            qlikApp3 = qlik.openApp('d5d93c75-5067-4711-8d95-66bd4102c919', config)
        }
    )
});