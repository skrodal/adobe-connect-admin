/**
 * app.js will fire functions in here AFTER Dataporten has been checked out.
 *
 * @author Simon Skrodal
 * @since October 2016
 */

var CONNECT_UI = (function () {
	var connectOrgList = null;

	function start() {
		$.when(CONNECT.groupsListOrgXHR()).done(function (response) {
			// Keep indexed array of org ids
			connectOrgList = response;
			// Check that logged on user's org is in the list from API
			if (response.indexOf(DATAPORTEN.user().org.id) >= 0) {
				$('#sectionOrgInfoAlert').hide();
				CONNECT_ORG.updateSelectedOrgSection(UTILS.timestampMinusDays(CONNECT.defaultDaysInPeriod()), UTILS.timestampNow(), DATAPORTEN.user().org.id);
				$('#sectionOrgInfo').fadeIn();
			} else {
				$('#sectionOrgInfoAlert').fadeIn();
				$('#sectionOrgInfo').hide();
			}
			// Update UI elements
			$('.serviceOrgCount').html(response.length);
			// Only superadmins
			if (DATAPORTEN.user().access.superadmin) {
				$('.btnShowOrgListing').show();
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
			// $.each(response, function (index, room) {});
			$('.meRoomsCount').html(response.length);
		});

		/* MEETINGS ROUTES */
		/* TODO: API NEEDS REWORK - WE WANT TO KEEP RANGE, BUT SHOULD RETURN ONE OBJECT PER DAY
		 $.when(CONNECT.meetingsStatsXHR()).done(function (response) {
		 console.log (response);
		 // Get minutes count, etc
		 //$('.meetingsMinutes').html(response);
		 });
		 */

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


		/*
		 $.when(CONNECT.).done(function (response) {
		 console.log(response);
		 });
		 */


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
