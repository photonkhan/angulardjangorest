var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider){

    var indexState = {
        name: "index",
        url: '/',
        template: "Go to Home and Information for data exchange"
    }

    var homeState = {
        name: 'home',
        url: '/home',
        template: "Home"
    };
    
    var informationState = {
        name: 'information',
        url: '/information',
        template: "Information"
    };

    $stateProvider.state(homeState);
    $stateProvider.state(informationState);
});