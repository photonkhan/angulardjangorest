app.controller('djangorestCtrl', function($http, $scope){
    var url = 'http://localhost:8000/api/v1/contact';
    $http.get(url).then(function(response){
        $scope.restData = response.data;
    });

    $scope.contact = {};
    $scope.addContact = function(){
        angular.element('add-contact-form-status').html('');
        var data = $scope.contact;
        $http.post(url, data).then(function(response){
            angular.element('add-contact-form-status').html('Contact Added Successfully');
        });
    };

    $scope.updateSelectedContact = {};
    $scope.ucontact = {};
    $scope.showUpdateContact = function(){
        $scope.ucontact = {
            id: $scope.updateSelectedContact.id,
            fullname: $scope.updateSelectedContact.name,
            email: $scope.updateSelectedContact.email,
            address: $scope.updateSelectedContact.address
        }
    }
    $scope.updateContact = function(){
        console.log($scope.ucontact);
    }
    
    $scope.deleteSelectedContact = {};
    $scope.deleteContact = function(){
        console.log($scope.deleteSelectedContact);
    }
    
});
