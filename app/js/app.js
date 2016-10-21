/**
 * Application "bootstrapper".
 *
 * @author Simon Skrodal
 * @since October 2016
 */

var APP = (function () {

	var jsonEditor;

	// Startup
	$(document).ready(function () {
		/**
		 // Single instance, shared by all
		 jsonEditor = new JSONEditor(document.getElementById('jsonDataExport'), {
			"modes": ["view", "text"],
			"mode": "text",
			"search": true,
			"indentation": 4
		});
		 **/
		updateUIGeneric();
		// Make sure Dataporten-related is done and verified before doing anything else.
		$.when(DATAPORTEN.readyUserXHR(), DATAPORTEN.readyGroupsXHR(), DATAPORTEN.readyUserServiceAccessXHR())
			.done(function () {
				$('.xhr').html('<i class="fa fa-spinner fa-pulse"></i>');
				updateUIFeide();
				updateUIConnect();
				$('[data-toggle="tooltip"]').tooltip();
			})
			.fail(function (jqXHR, textStatus, error) {
				UTILS.alertError("Nektet tilgang", "Beklager, henting av informasjon om deg og dine tilganger feilet. Prøv å laste siden på nytt.");
			});
	});


	function updateUIGeneric() {
		$('span.supportEmail').html(CONFIG.CONNECT_SUPPORT_EMAIL());
		$('span.connectServiceURL').html(CONFIG.CONNECT_SERVICE_URL());
	}

	/**
	 * Update UI here and there...
	 */
	function updateUIFeide() {
		$('div#content').fadeIn();
		// User-specific
		$('.userFirstName').html(' ' + DATAPORTEN.user().name.first);
		$('.userFullName').html(' ' + DATAPORTEN.user().name.full);
		$('.userRole').html(' ' + DATAPORTEN.user().access.role);
		$('.userRoleDescription').attr('title', DATAPORTEN.user().access.desc);
		$('.feideOrg').html(' ' + DATAPORTEN.user().org.name);
		$('.feideAffiliation').html(' ' + (DATAPORTEN.user().affiliation == "employee") ? " Ansatt" : " Student");
		$('.userImage').attr('src', DATAPORTEN.user().photo);
		// Dev
		//$('#dataportenSessionInfo').text(JSON.stringify(DATAPORTEN.user(), undefined, 2));
	}

	$('.logout').on('click', function () {
		DP_AUTH.logout();
	});


	function updateUIConnect() {
		/* SERVICE ROUTES */
		$.when(CONNECT.serviceVersionXHR()).done(function (response) {
			$('.serviceVersion').html('Adobe Connect v.' + response);
		});
		/* GROUP ROUTES */
		$.when(CONNECT.groupsListOrgXHR()).done(function (response) {
			$('.serviceOrgCount').html(response.length);
			if(DATAPORTEN.user().access.superadmin){
				//
			}
			console.log(response);

		});


		/* ME ROUTES */
		$.when(CONNECT.meXHR()).done(function (response) {
			$('.meHasAccount').html(response.hasOwnProperty('login') ? "<i class='ion ion-checkmark-round text-green'></i>" : "<i class='ion ion-close-round uninett-fontColor-red'></i>");
			console.log("Me");
			console.log(response);
		});

		$.when(CONNECT.meRoomsXHR()).done(function (response) {
			// $.each(response, function (index, room) {});
			$('.meRoomsCount').html(response.length);
			console.log("Rooms:");
			console.log(response);
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
		jsonEditor: function () {
			return jsonEditor;
		}
	}
})();


/*
 // SUPER ADMIN
 if (is_super_admin) {
 org_active_subscribers = getActiveSubscribersCount(SUBSCRIBERS_KIND_ARR);
 buildSubscribersTable(SUBSCRIBERS_KIND_ARR);
 populateSubscribersDropdown(SUBSCRIBERS_KIND_ARR);
 }
 */