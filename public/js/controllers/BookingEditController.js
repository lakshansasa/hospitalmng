// START - USED SERVICES
/*
 *	BookingService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	BookingService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * BookingService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('BookingEditController', ['$scope', 'BookingService',
    function ($scope, BookingService ) {
		
    	$scope.list = BookingService.query();
    	
}]);