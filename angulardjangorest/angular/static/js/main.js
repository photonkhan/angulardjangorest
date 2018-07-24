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

app.service('sharedService', function(){
    this.names = [];
    this.setNames = function(list_of_names){
        this.names = list_of_names;
    }
    this.getNames = function(){
        return this.names;
    }
});

app.controller('homeCtrl', function($scope, sharedService, $location){
    $scope.user = {};
    $scope.sendData = function(){
       $scope.data = [
                {
                    id : 1,
                    name: $scope.user.name_1
                },
                {
                    id : 2,
                    name: $scope.user.name_2
                },
                {
                    id : 3,
                    name: $scope.user.name_3
                }
        ];
        sharedService.setNames($scope.data);
        $location.path('/information');
    };

});

app.controller('informationCtrl', function($scope, sharedService){
    $scope.receivedData = sharedService.getNames();
});