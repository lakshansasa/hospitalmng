// START - USED SERVICES
/*
 *	RegistrationService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	RegistrationService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * RegistrationService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('RegistrationListController', ['$scope', 'RegistrationService',
    function ($scope, RegistrationService ) {
		
    	$scope.list = RegistrationService.query();
    	
}]);