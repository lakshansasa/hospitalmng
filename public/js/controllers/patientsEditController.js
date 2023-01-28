// START - USED SERVICES
/*
 *	patientsService.create
 *		PARAMS: 
 *		
 *
 *	patientsService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	patientsService.get
 *		PARAMS: 
 *					ObjectId id - Id resource
 *		
 *
 *	RegistrationService.findBy_patients
 *		PARAMS: 
 *					Objectid key - Id of model to search for
 *		
 *
 *	DoctorService.findBy_patients
 *		PARAMS: 
 *					Objectid key - Id of model to search for
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
 * patientsService  
 */
// END - REQUIRED RESOURCES

app.controller('patientsEditController', ['$scope', '$location', '$routeParams', '$q', 'DoctorService', 'RegistrationService', 'patientsService', 'DoctorService', 'RegistrationService', 'DoctorService',
    function ($scope, $location, $routeParams, $q, DoctorService , RegistrationService , patientsService , DoctorService, RegistrationService, DoctorService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = patientsService.get({_id: $scope.id});
        	$scope.external._Registration_patients = RegistrationService.findBy_patients({key: $scope.id});
        	$scope.external._Doctor_patients = DoctorService.findBy_patients({key: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new patientsService();
        	$scope.external._Registration_patients = [];
        	$scope.external._Doctor_patients = [];
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/patientses/');
    		});
    	}
    	
    	$scope.remove = function(){
    		patientsService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/patientses/');
    		});
    	}
    	
    		
        //manage relation _Doctor
        		
    	$scope.list_Doctor = DoctorService.query();

    	$scope.contain_Doctor = function(item){
    		if (!$scope.obj._Doctor) return false;
    		return $scope.obj._Doctor.indexOf(item) != -1;
    	}
		    	
		$scope.add_Doctor = function(item){
			if(!$scope.obj._Doctor)
				$scope.obj._Doctor = [];
			$scope.obj._Doctor.push(item);
		}
		
		$scope.remove_Doctor = function(index){
			$scope.obj._Doctor.splice(index, 1);
		}
    		
        //manage External relation _patients
        		
    	$scope.list_Registration_patients = RegistrationService.query();
    	
    		
        //manage External relation _patients
        		
    	$scope.list_Doctor_patients = DoctorService.query();
    	
}]);