// START - USED SERVICES
/*
 *	DoctorService.create
 *		PARAMS: 
 *		
 *
 *	DoctorService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	DoctorService.get
 *		PARAMS: 
 *					ObjectId id - Id resource
 *		
 *
 *	RegistrationService.findBy_Doctor
 *		PARAMS: 
 *					Objectid key - Id of model to search for
 *		
 *
 *	patientsService.list
 *		PARAMS: 
 *		
 *
 *	patientsService.findBy_Doctor
 *		PARAMS: 
 *					Objectid key - Id of model to search for
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * DoctorService  
 * RegistrationService  
 * patientsService  
 */
// END - REQUIRED RESOURCES

app.controller('DoctorEditController', ['$scope', '$location', '$routeParams', '$q', 'DoctorService', 'RegistrationService', 'patientsService', 'patientsService', 'patientsService', 'RegistrationService',
    function ($scope, $location, $routeParams, $q, DoctorService , RegistrationService , patientsService , patientsService, patientsService, RegistrationService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = DoctorService.get({_id: $scope.id});
        	$scope.external._patients_Doctor = patientsService.findBy_Doctor({key: $scope.id});
        	$scope.external._Registration_Doctor = RegistrationService.findBy_Doctor({key: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new DoctorService();
        	$scope.external._patients_Doctor = [];
        	$scope.external._Registration_Doctor = [];
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/doctors/');
    		});
    	}
    	
    	$scope.remove = function(){
    		DoctorService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/doctors/');
    		});
    	}
    	
    		
        //manage relation _patients
        		
    	$scope.list_patients = patientsService.query();

    		
        //manage External relation _Doctor
        		
    	$scope.list_patients_Doctor = patientsService.query();
    	
    		
        //manage External relation _Doctor
        		
    	$scope.list_Registration_Doctor = RegistrationService.query();
    	
}]);