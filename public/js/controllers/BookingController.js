// START - USED SERVICES
/*
 *	BookingService.create
 *		PARAMS: 
 *		
 *
 *	BookingService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	BookingService.get
 *		PARAMS: 
 *					ObjectId id - Id resource
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * BookingService  
 */
// END - REQUIRED RESOURCES

app.controller('BookingController', ['$scope', '$location', '$routeParams', '$q', 'BookingService',
    function ($scope, $location, $routeParams, $q, BookingService ) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = BookingService.get({_id: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new BookingService();
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/bookings/');
    		});
    	}
    	
    	$scope.remove = function(){
    		BookingService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/bookings/');
    		});
    	}
    	
}]);