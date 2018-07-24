app.config(function($stateProvider){
    var homeState = {
        name: 'home',
        url: '/home',
        templateUrl: '/static/html/home.html',
        controller: 'homeCtrl'
    };
    
    var informationState = {
        name: 'information',
        url: '/information',
        templateUrl: '/static/html/information.html',
        controller: 'informationCtrl'
    };

    $stateProvider.state(homeState);
    $stateProvider.state(informationState);
});
