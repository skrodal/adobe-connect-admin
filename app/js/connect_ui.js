/**
 * app.js will fire functions in here AFTER Dataporten has been checked out.
 *
 * @author Simon Skrodal
 * @since October 2016
 */

var CONNECT_UI = (function () {
	var connectOrgList = null;

	function start() {
		$.when(CONNECT.orgsUsersCountXHR()).done(function (response) {
			// Keep indexed array of org ids
			connectOrgList = response;
			// Check that logged on user's org is in the list from API
			if (response.hasOwnProperty(DATAPORTEN.user().org.id)) {
				$('#sectionOrgInfoAlert').hide();
				// Start with 14 days of stats for logged on user's home org
				CONNECT_ORG.updateSelectedOrgSection(UTILS.timestampMinusDays(CONNECT.defaultDaysInPeriod()), UTILS.timestampNow(), DATAPORTEN.user().org.id);
				// Start with 14 days of global stats
				CONNECT_GLOBAL.updateGlobalSection(UTILS.timestampMinusDays(CONNECT.defaultDaysInPeriod()), UTILS.timestampNow());
				$('#sectionOrgInfo').fadeIn();
			} else {
				$('#sectionOrgInfoAlert').fadeIn();
				$('#sectionOrgInfo').hide();
			}
			// Update UI elements
			$('.serviceOrgCount').html(Object.keys(response).length);
			// Only SuperAdmin
			if (DATAPORTEN.user().access.superadmin) {
				// Show menu item in dropdown for orgStats section
				$('.btnShowOrgListing').show();
			}
			// Minimum OrgAdmin
			if(DATAPORTEN.user().access.orgadmin){
				// Show menu dropdown items in orgStats section
				$('#orgStatsConfigMenu').fadeIn();
				$('#orgStatsConfigMenu').find('.btnExportUserData').show();
				$('#orgStatsConfigMenu').find('.btnExportStatsData').show();
			}
			// Scroll past jumbotron when shit has loaded
			$('html,body').animate({
				scrollTop: $('#sectionQuickStats').offset().top - 110
			}, 1000);
		});

		// Data from all other API endpoints
		updateUI();
	}

	/**
	 *
	 */
	function updateUI() {
		/* SERVICE ROUTES */
		$.when(CONNECT.serviceVersionXHR()).done(function (response) {
			$('.serviceVersion').html('Adobe Connect v.' + response);
		});
		/* GROUP ROUTES */


		/* ME ROUTES */
		$.when(CONNECT.meXHR()).done(function (response) {
			$('.meHasAccount').html(response.hasOwnProperty('login') ? "<i class='ion ion-checkmark-round text-green'></i>" : "<i class='ion ion-close-round uninett-fontColor-red'></i>");
		});

		$.when(CONNECT.meRoomsXHR()).done(function (response) {
			// console.log(response);
			$('.meRoomsCount').html(response.length);
			if(response.length > 0){
				// Class pulsate for candy (and alert to the fact that it is clickable)
				$('.meRoomsCount').addClass('btn btn-lg btn-link badge bg-aqua pulsate');
				var $table = $('#userRoomsTable');
				$table.find('tbody').html("");
				$.each(response, function (index, roomObj) {
					$table.find('tbody').append("<tr><td><a target='_blank' href='https://connect.uninett.no" + roomObj['url-path'] + "'>" + roomObj.name + "</a></td> <td>" + roomObj.created.split(',')[0] + "</td></tr>");
				});
				// Small modal with list of user's meeting rooms
				$('.meRoomsCount').on('click', function(){
					$('#modalUser').modal('show');
				});
			}
		});

		/* MEETINGS ROUTES */


		/* ROOMS ROUTES */
		$.when(CONNECT.roomsCountTotalXHR()).done(function (response) {
			$('.roomsCount').html(response);
		});


		/* USERS ROUTES */
		$.when(CONNECT.usersCountXHR()).done(function (response) {
			$('.usersCount').html(response);
		});

		$.when(CONNECT.usersCountXHR()).done(function (response) {
			$('.usersCount').html(response);
		});

		// Of all times..
		$.when(CONNECT.usersMaxConcurrentSinceDaysXHR(7000)).done(function (response) {
			// Also available: response.frequency
			$('.usersMaxConcurrent').html(response.count);
		});

		// Last 30 days (default)
		$.when(CONNECT.usersMaxConcurrentSinceDaysXHR(30)).done(function (response) {
			// Also available: response.frequency
			$('.usersMaxConcurrentSinceDays').html(response.count);
			$('.usersMaxConcurrentNumberOfDays').html(response.since_days);
		});
	}

	return {
		start: function () {
			return start();
		},
		orgList: function () {
			return connectOrgList;
		}
	}
})();
