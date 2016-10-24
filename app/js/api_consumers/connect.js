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

	function meetingsStatsInPeriodXHR(from, to){
		return _callConnectAPI("meetings/stats/from/"+from+"/to/"+now+"/");
	}

	function meetingsStatsInPeriodForOrgXHR(from, to, org){
		return _callConnectAPI("meetings/stats/from/"+from+"/to/"+to+"/org/" + org + "/");
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

	function usersOrgCountXHR(org){
		return _callConnectAPI("users/"+org+"/count/");
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
		meetingsStatsInPeriodXHR: function (from, to) {
			return meetingsStatsInPeriodXHR(from, to);
		},
		meetingsStatsInPeriodForOrgXHR: function (from, to, org) {
			return meetingsStatsInPeriodForOrgXHR(from, to, org);
		},
		usersCountXHR: function () {
			return usersCountXHR();
		},
		usersOrgCountXHR: function (org) {
			return usersOrgCountXHR(org);
		},
		usersMaxConcurrentSinceDaysXHR: function (days) {
			return usersMaxConcurrentSinceDaysXHR(days);
		},

	}

})();
