app.controller('informationCtrl', function($scope, sharedService){
    $scope.receivedData = sharedService.getNames();
});