(function () {
    requirejs.config({
        baseUrl: 'js/', //根目录 出发点在js目录下去找dataService和alerter
        paths: {
            dataService: 'modules/dataService',
            alerter: 'modules/alerter'
        }
    });


    requirejs(['alerter'],function (alerter) {
        alerter.showMsg()
    })
})()