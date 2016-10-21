var CONNECT = (function () {

	/* SERVICE ROUTES */
	function serviceVersionXHR() {
		return _callConnectAPI("service/version/");
	}

	/* GROUP ROUTES */
	function groupsListOrgXHR(){
		return _callConnectAPI("groups/orgs/");
	}

	/* ME ROUTES */

	function meXHR(){
		return _callConnectAPI("me/");
	}
	function meRoomsXHR(){
		return _callConnectAPI("me/rooms/");
	}

	/* MEETINGS ROUTES */

	function meetingsStatsXHR(since_days){
		// Since beginning of time to now
		var then = 0;
		var now = Math.floor(Date.now() / 1000);
		return _callConnectAPI("meetings/stats/from/"+then+"/to/"+now+"/");
	}

	/* ROOMS ROUTES */

	function roomsCountTotalXHR(){
		//var then = 971337992;
		//var now = Math.floor(Date.now() / 1000);
		return _callConnectAPI("rooms/count/");
	}

	function roomsPeriodCountXHR(){
		var then = 971337992;
		var now = Math.floor(Date.now() / 1000);
		return _callConnectAPI("rooms/count/from/"+then+"/to/"+now+"/");
	}

	/* USERS ROUTES */

	function usersCountXHR(){
		return _callConnectAPI("users/count/");
	}

	function usersMaxConcurrentSinceDaysXHR(days){
		return _callConnectAPI("users/maxconcurrent/count/since-days/"+days+"/");
	}


	function _callConnectAPI(route){
		return DP_AUTH.jso().ajax({
			url: DP_AUTH.config().api_endpoints.adobeconnect + route,
			datatype: 'json'
		})
			.pipe(function (response) {
				return response.data;
			})
			.fail(function (jqXHR, textStatus, error) {
				var title = "Feil";
				var message = "<p>Forespørsel <kbd>" + route + "</kbd> feilet med melding: </p><p><code>"  + error + " (" + jqXHR.responseJSON.message + ")</code>.</p> <p>Dersom problemet vedvarer, send en epost til " + CONFIG.CONNECT_SUPPORT_EMAIL() + "</p>";
				UTILS.alertError(title, message);
			});
	}

	return {
		serviceVersionXHR: function () {
			return serviceVersionXHR();
		},
		groupsListOrgXHR: function () {
			return groupsListOrgXHR();
		},
		meXHR: function () {
			return meXHR();
		},
		meRoomsXHR: function () {
			return meRoomsXHR();
		},
		roomsCountTotalXHR: function () {
			return roomsCountTotalXHR();
		},
		// TODO: NEEDS WORK ON API!
		meetingsStatsXHR: function () {
			return meetingsStatsXHR();
		},
		usersCountXHR: function () {
			return usersCountXHR();
		},
		usersMaxConcurrentSinceDaysXHR: function (days) {
			return usersMaxConcurrentSinceDaysXHR(days);
		},

	}

})();
