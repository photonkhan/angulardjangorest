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
    };
    
    $scope.updateContact = function(){
        $http.put(url, $scope.ucontact, function(response){
            $console.log("Deleted Successfully");
        });
    };
    
    $scope.deleteSelectedContact = {};
    $scope.deleteContact = function(){
        var delete_url = url + "/" + $scope.deleteSelectedContact.id;
        $http.delete(delete_url, function(){
            $console.log("Deleted Successfully");
        });
    };
    
});
