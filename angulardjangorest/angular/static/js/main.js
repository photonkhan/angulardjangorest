var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider){
    var homeState = {
        name: 'home',
        url: '/home',
        template: 'Home'
        // templateUrl: ''
    };

    var informationState = {
        name: 'information',
        url: '/information',
        template: 'Information'
        // templateUrl: ''
    };

    $stateProvider.state(homeState);
    $stateProvider.state(informationState);
});