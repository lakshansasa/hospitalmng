// START - USED SERVICES
/*
 *	DoctorService.delete
 *		PARAMS: 
 *					ObjectId id - Id
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
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('DoctorListController', ['$scope', 'DoctorService',
    function ($scope, DoctorService ) {
		
    	$scope.list = DoctorService.query();
    	
}]);