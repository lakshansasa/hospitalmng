// START - USED SERVICES
/*
 *	patientsService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	patientsService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * patientsService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('patientsListController', ['$scope', 'patientsService',
    function ($scope, patientsService ) {
		
    	$scope.list = patientsService.query();
    	
}]);