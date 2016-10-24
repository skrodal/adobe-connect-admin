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
				updateSelectedOrgSection(UTILS.timestampMinusDays(7), UTILS.timestampNow(), DATAPORTEN.user().org.id);
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
		});

		updateUI();


	}


	/**
	 * If SuperAdmin, org can be anything. If logged on user is not SuperAdmin, API will ignore `org` and
	 * return data for user's home org.
	 *
	 * @param from
	 * @param to
	 * @param org
	 */
	function updateSelectedOrgSection(from, to, org) {
		$('#sectionOrgInfo').find('.ajax').show();
		$('.selectedOrg').html(org);
		// TODO: Consider making `to` == from + 7 days.
		$.when(CONNECT.usersOrgCountXHR(org)).done(function (response) {
			$('.selectedOrgUserCount').html(response);
			// TODO: Make sure we get total before for selected org
			//var percentage = totalCount * 100 / response;
			//$('.selectedOrgUserCountPercentage').attr('width', percentage);
		});

		// Main source of data - get lots of info about usage within a certain time frame.
		$.when(CONNECT.meetingsStatsInPeriodForOrgXHR(from, to, org)).done(function (response) {
			$('.selectedOrgUserCountPeriod').html(response.summary.users);
			$('.selectedOrgRoomCountPeriod').html(response.summary.rooms);
			$('.selectedOrgSessionCountPeriod').html(response.summary.sessions);
			$('.selectedOrgMeetingMinutesPeriod').html(UTILS.secToTimeAndDays(response.summary.duration_sec));

			buildChartMeetingStatsPeriod(response);

			$('#sectionOrgInfo').find('.ajax').fadeOut();
		});
	}

	function buildChartMeetingStatsPeriod(response){
		// var data['datasets'] = [];


	}
	/*
	{
		datasets: [{
			label: 'Scatter Dataset',
			data: [{
				x: -10,
				y: 0
			}, {
				x: 0,
				y: 10
			}, {
				x: 10,
				y: 5
			}]
		}]
	},
*/

	/**
	 * Generic modal builder - will call relevant function based on data-type on link/button called.
	 */
	$('#modalSuperAdmin').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget);
		var type = button.data('type') // Extract info from data-type attribute
		// Update the modal's content according to type
		switch (type) {
			case 'orgList':
				buildOrgListing($(this));
				break;
		}
	})

	/**
	 * Fired when show() on modal for org listing is triggered.
	 *
	 * Safe to use connectOrgList here (otherwise button to show the modal would not exist)
	 * @param $modal
	 */
	function buildOrgListing($modal) {
		$modal.find('#title').html("Registrerte orgs på tjenesten");
		$modal.find('.modal-dialog').addClass('modal-sm');
		$table = $('#orgsTable').clone();
		$table.find('tbody').html("");

		$from = UTILS.timestampMinusDays(7)
		$to = UTILS.timestampNow();

		$.each(connectOrgList, function (index, orgName) {
			$table.find('tbody').append("<tr><td><button class='btn btn-link xhrTrigger' data-function='updateSelectedOrgSection' data-from='" + $from + "' data-to='" + $to + "' data-org='" + orgName + "'>" + orgName + "</button></td></tr>");
		});
		$modal.find('#body').html($table);
		$table.show();
	}

	/**
	 * Catch clicks on any .xhrTrigger class in the SuperAdmin modal
	 */
	$('#modalSuperAdmin').on('click', '.xhrTrigger', function (event) {
		var button = event.target;
		switch (button.dataset.function) {
			case 'updateSelectedOrgSection':
				updateSelectedOrgSection(button.dataset.from, button.dataset.to, button.dataset.org);
				$('#modalSuperAdmin').modal('hide');
				break;
		}
	});


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
		tester: function () {
			// return tester();
		},
		updateUI: function () {
			return updateUI();
		}
	}
})();
