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

    var directState = {
        name: 'direct',
        url: '/direct',
        templateUrl: '/static/html/direct.html',
        controller: 'directCtrl'
    };

    var djangorestState = {
        name: 'djangorest',
        url: '/djangorest',
        templateUrl: '/static/html/djangorest.html',
        controller: 'djangorestCtrl'
    };

    $stateProvider.state(homeState);
    $stateProvider.state(informationState);
    $stateProvider.state(directState);
    $stateProvider.state(djangorestState);
});
