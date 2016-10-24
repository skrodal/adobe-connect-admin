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

		// Spinners for data we don't have yet
		$('.xhr').html('<i class="fa fa-spinner fa-pulse"></i>');
		// Stuff from config that is readily available
		updateUIGeneric();

		// Make sure Dataporten-related is done and verified before doing anything else.
		$.when(DATAPORTEN.readyUserXHR(), DATAPORTEN.readyGroupsXHR(), DATAPORTEN.readyUserServiceAccessXHR())
			.done(function () {
				// Display info from Dataporten
				updateUIDataporten();
				// Start loading from Connect API endpoints
				CONNECT_UI.start();
				// Do this last since XHR may build new DOM elements with tooltip
				$('[data-toggle="tooltip"]').tooltip();
			})
			.fail(function (jqXHR, textStatus, error) {
				UTILS.alertError("Nektet tilgang", "Beklager, henting av informasjon om deg og dine tilganger feilet. Prøv å laste siden på nytt.");
			});
	});

	/**
	 *
	 */
	function updateUIGeneric() {
		$('span.supportEmail').html(CONFIG.CONNECT_SUPPORT_EMAIL());
		$('span.connectServiceURL').html(CONFIG.CONNECT_SERVICE_URL());
	}

	/**
	 * Update UI here and there...
	 */
	function updateUIDataporten() {
		$('div#content').fadeIn();
		// User-specific
		$('.userFirstName').html(DATAPORTEN.user().name.first);
		$('.userFullName').html(DATAPORTEN.user().name.full);
		$('.userRole').html(DATAPORTEN.user().access.role);
		$('.userRoleDescription').attr('title', DATAPORTEN.user().access.desc);
		$('.feideOrg').html(DATAPORTEN.user().org.name);
		$('.feideOrgId').html(DATAPORTEN.user().org.id);
		// Initially, SuperAdmin can change
		$('.selectedOrg').html(DATAPORTEN.user().org.name);
		$('.feideAffiliation').html((DATAPORTEN.user().affiliation == "employee") ? " Ansatt" : " Student");
		$('.userImage').attr('src', DATAPORTEN.user().photo);
		if(DATAPORTEN.user().access.orgadmin){
			$('.inviteURL').html(DATAPORTEN.user().access['group-invitation']);
			$('.inviteURL').attr('value', DATAPORTEN.user().access['group-invitation']);
			$('.isAdmin').show();
		}else{
			$('.isGuest').show();
		}
		// Dev
		//$('#dataportenSessionInfo').text(JSON.stringify(DATAPORTEN.user(), undefined, 2));
	}

	$('.logout').on('click', function () {
		DP_AUTH.logout();
	});

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