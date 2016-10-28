var CONNECT = (function () {

	// Results in 14 days (including start/end date)
	var defaultDaysInPeriod = 13;

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
		return _callConnectAPI("meetings/stats/from/"+from+"/to/"+to+"/");
	}

	function meetingsStatsInPeriodForOrgXHR(from, to, org){
		return _callConnectAPI("meetings/stats/from/"+from+"/to/"+to+"/org/" + org + "/");
	}

	/* ORGS ROUTES */

	function orgsUsersCountXHR(){
		return _callConnectAPI("orgs/users/count/");
	}

	function orgUsersXHR(org){
		return _callConnectAPI("org/" + org + "/users/");
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
		return _callConnectAPI("org/"+org+"/users/count/");
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
				var title = "<kbd>"+error+"</kbd>";
				var message = "<p>Forespørsel <code>" + route + "</code> feilet med melding: </p><p class='well'>" + JSON.parse(jqXHR.responseText).message + "</p> <p class='text-muted'>Kan hende du nå må laste siden på nytt for å fortsette...</p>";
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
		orgUsersXHR: function (org) {
			return orgUsersXHR(org);
		},
		orgsUsersCountXHR: function () {
			return orgsUsersCountXHR();
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
		defaultDaysInPeriod: function () {
			return 	defaultDaysInPeriod;
		}

	}

})();
