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