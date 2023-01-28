/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE ImpiegatiService PLEASE EDIT js/services/custom/patientsCustomService.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */


app.factory('patientsService', ['$resource', '$rootScope', 'patientsServiceCustom',
  function($resource, $rootScope, patientsServiceCustom){
    return $resource( $rootScope.baseUrl + "/patients/:_id", {_id:'@_id'}, $.extend({
        'findBy_Doctor': { 
        	url: $rootScope.baseUrl + '/patients/findBy_Doctor/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		key: '@key',
        		 
        	}
        },
        'validate': { 
        	url: $rootScope.baseUrl + '/patients/id/validate',
        	method: 'POST',
        	isArray: false,
        	params: {
        		 
        	}
        },
    }, patientsServiceCustom));
}]);