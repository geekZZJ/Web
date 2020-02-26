(function () {
    requirejs.config({
        baseUrl: 'js/', //根目录 出发点在js目录下去找dataService和alerter
        paths: {
            dataService: 'modules/dataService',
            alerter: 'modules/alerter',
            jquery: 'libs/jquery-1.10.1',
            angular: 'libs/angular'
        },
        shim: {
            angular: {
                exports: 'angular'
            }
        }
    });


    requirejs(['alerter','angular'],function (alerter,angular) {
        alerter.showMsg()
        console.log(angular)
    })
})()