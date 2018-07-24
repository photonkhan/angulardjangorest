app.service('sharedService', function(){
    this.names = [];
    this.setNames = function(list_of_names){
        this.names = list_of_names;
    }
    this.getNames = function(){
        return this.names;
    }
});
