var app = angular.module('myApp', ['ui.router']);

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

app.controller('homeCtrl', function($scope, $http){
    $scope.sendData = function(){
        
    }
});

app.controller('informationCtrl', function($scope, $http){

});