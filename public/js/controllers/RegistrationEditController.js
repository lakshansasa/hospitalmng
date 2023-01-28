// START - USED SERVICES
/*
 *	RegistrationService.create
 *		PARAMS: 
 *		
 *
 *	RegistrationService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	RegistrationService.get
 *		PARAMS: 
 *					ObjectId id - Id resource
 *		
 *
 *	patientsService.list
 *		PARAMS: 
 *		
 *
 *	UserService.list
 *		PARAMS: 
 *		
 *
 *	DoctorService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * DoctorService  
 * RegistrationService  
 * UserService  
 * patientsService  
 */
// END - REQUIRED RESOURCES

app.controller('RegistrationEditController', ['$scope', '$location', '$routeParams', '$q', 'DoctorService', 'RegistrationService', 'UserService', 'patientsService', 'DoctorService', 'patientsService', 'UserService',
    function ($scope, $location, $routeParams, $q, DoctorService , RegistrationService , UserService , patientsService , DoctorService, patientsService, UserService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = RegistrationService.get({_id: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new RegistrationService();
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/registrations/');
    		});
    	}
    	
    	$scope.remove = function(){
    		RegistrationService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/registrations/');
    		});
    	}
    	
    		
        //manage relation _Doctor
        		
    	$scope.list_Doctor = DoctorService.query();

    		
        //manage relation _patients
        		
    	$scope.list_patients = patientsService.query();

    		
        //manage relation _user
        		
    	$scope.list_User = UserService.query();

}]);