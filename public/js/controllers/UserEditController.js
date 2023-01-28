// START - USED SERVICES
/*
 *	UserService.create
 *		PARAMS: 
 *		
 *
 *	UserService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	UserService.get
 *		PARAMS: 
 *					ObjectId id - Id resource
 *		
 *
 *	RegistrationService.findBy_user
 *		PARAMS: 
 *					Objectid key - Id of model to search for
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * RegistrationService  
 * UserService  
 */
// END - REQUIRED RESOURCES

app.controller('UserEditController', ['$scope', '$location', '$routeParams', '$q', 'RegistrationService', 'UserService', 'RegistrationService',
    function ($scope, $location, $routeParams, $q, RegistrationService , UserService , RegistrationService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = UserService.get({_id: $scope.id});
        	$scope.external._Registration_user = RegistrationService.findBy_user({key: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new UserService();
        	$scope.external._Registration_user = [];
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/users/');
    		});
    	}
    	
    	$scope.remove = function(){
    		UserService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/users/');
    		});
    	}
    	
    		
        //manage External relation _user
        		
    	$scope.list_Registration_user = RegistrationService.query();
    	
}]);